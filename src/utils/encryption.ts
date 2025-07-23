import CryptoJS from "crypto-js";

// Use a strong secret key - in production, this should come from environment variables
const SECRET_KEY =
  import.meta.env.VITE_ENCRYPTION_KEY || "your-default-secret-key-change-this";
const SIGNING_KEY =
  import.meta.env.SIGNING_KEY || "your-default-signing-key-change-this";
const ENCRYPTION_VERSION = "1.0"; // Version for future compatibility

interface EncryptedPayload {
  data: string; // Encrypted data
  timestamp: number; // Timestamp of encryption
  version: string; // Version of the encryption
  expiresAt?: number; // Optional expiration timestamp
  signature?: string; // Optional signature for integrity
}

//function for encrypting data
export const encryptData = (
  data: string,
  expirationHours?: number,
  withSignature = false
): string => {
  try {
    const payload: EncryptedPayload = {
      data,
      timestamp: Date.now(),
      version: ENCRYPTION_VERSION,
    };

    // add expiration if passed as paramenter
    if (expirationHours && expirationHours > 0) {
      payload.expiresAt = Date.now() + expirationHours * 60 * 60 * 1000;
    }

    //add signature if requested

    if (withSignature) {
      const dataToSign = `${payload.data}${payload.timestamp}${
        payload.version
      }${payload.expiresAt || ""}`;
      payload.signature = CryptoJS.HmacSHA256(
        dataToSign,
        SIGNING_KEY
      ).toString();
    }

    const jsonString = JSON.stringify(payload);
    const encrypted = CryptoJS.AES.encrypt(jsonString, SECRET_KEY).toString();
    return encrypted;
  } catch (error) {
    console.error("Encryption error:", error);
    throw new Error("Failed to encrypt data");
  }
};

//function for decrypting data
export const decryptData = (
  encryptedData: string,
  checkExpiration = false,
  verifySignature = false
): string => {
  try {
    const decrypted = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
    const jsonString = decrypted.toString(CryptoJS.enc.Utf8);

    if (!jsonString) {
      throw new Error("Invalid encrypted data");
    }

    const payload: EncryptedPayload = JSON.parse(jsonString);

    if (verifySignature && payload.signature) {
      const dataToVerify = `${payload.data}${payload.timestamp}${payload.version}${payload.expiresAt || ""}`;
      const expectedSignature = CryptoJS.HmacSHA256(
        dataToVerify,
        SIGNING_KEY
      ).toString();

      if (payload.signature !== expectedSignature) {
        throw new Error("Data integrity check failed -signature mismatch");
      }
    }

    if(checkExpiration&&payload.expiresAt&&payload.expiresAt<Date.now()){
      throw new Error('Expired data');
    }

    return payload.data;
  } catch (error) {
    console.error("Decryption error:", error);
    throw new Error("Failed to decrypt data");
  }
};

// Utility functions for localStorage with encryption
export const setEncryptedItem = (key: string, value: string,expirationHours?: number,withSignature = false): void => {
  try {
    const encryptedValue = encryptData(value,expirationHours,withSignature);
    localStorage.setItem(key, encryptedValue);
  } catch (error) {
    console.error("Error storing encrypted data:", error);
    throw error;
  }
};

export const getDecryptedItem = (key: string, checkExpiration = false, verifySignature = false): string | null => {
  try {
    const encryptedValue = localStorage.getItem(key);
    if (!encryptedValue) return null;
    
    return decryptData(encryptedValue, checkExpiration, verifySignature);
  } catch (error) {
    console.error('Error retrieving encrypted data:', error);
    // If decryption fails, data is expired, or signature is invalid, remove the item
    localStorage.removeItem(key);
    return null;
  }
};


export const removeEncryptedItem = (key: string): void => {
  localStorage.removeItem(key);
};

// Utility functions for common data types with signing
export const setSignedEncryptedObject = <T>(key: string, object: T, expirationHours?: number): void => {
  try {
    const jsonString = JSON.stringify(object);
    setEncryptedItem(key, jsonString, expirationHours, true); // Always sign objects
  } catch (error) {
    console.error('Error storing signed encrypted object:', error);
    throw new Error('Failed to store signed encrypted object');
  }
};

export const getSignedDecryptedObject = <T>(key: string, checkExpiration = false): T | null => {
  try {
    const jsonString = getDecryptedItem(key, checkExpiration, true); // Always verify signatures
    if (!jsonString) return null;
    
    return JSON.parse(jsonString) as T;
  } catch (error) {
    console.error('Error retrieving signed encrypted object:', error);
    // Remove corrupted or tampered data
    removeEncryptedItem(key);
    return null;
  }
};

// Secure session management with signing
export const setSecureSessionData = <T>(key: string, data: T, sessionHours = 24): void => {
  setSignedEncryptedObject(key, data, sessionHours);
};

export const getSecureSessionData = <T>(key: string): T | null => {
  return getSignedDecryptedObject<T>(key, true); // Check expiration and verify signature
};

// Check if data has a valid signature
export const hasValidSignature = (key: string): boolean => {
  try {
    const encryptedValue = localStorage.getItem(key);
    if (!encryptedValue) return false;
    
    // Try to decrypt and verify signature without throwing
    decryptData(encryptedValue, false, true);
    return true;
  } catch {
    // Remove invalid or tampered data
    localStorage.removeItem(key);
    return false;
  }
};

// Data integrity utilities
export const verifyDataIntegrity = (key: string): { valid: boolean; signed: boolean; expired?: boolean } => {
  try {
    const encryptedValue = localStorage.getItem(key);
    if (!encryptedValue) return { valid: false, signed: false };
    
    const decrypted = CryptoJS.AES.decrypt(encryptedValue, SECRET_KEY);
    const jsonString = decrypted.toString(CryptoJS.enc.Utf8);
    
    if (!jsonString) return { valid: false, signed: false };
    
    const payload: EncryptedPayload = JSON.parse(jsonString);
    const signed = !!payload.signature;
    
    let expired = false;
    if (payload.expiresAt) {
      expired = payload.expiresAt < Date.now();
    }
    
    // If signed, verify signature
    if (signed) {
      const dataToVerify = `${payload.data}${payload.timestamp}${payload.version}${payload.expiresAt || ''}`;
      const expectedSignature = CryptoJS.HmacSHA256(dataToVerify, SIGNING_KEY).toString();
      const valid = payload.signature === expectedSignature;
      
      return { valid, signed, expired };
    }
    
    return { valid: true, signed: false, expired };
  } catch {
    return { valid: false, signed: false };
  }
};
