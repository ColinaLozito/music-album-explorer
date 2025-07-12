export interface ErrorContextType {
  error: string | null;
  setError: (msg: string | null) => void;
}