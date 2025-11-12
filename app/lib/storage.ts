export const LS_KEY = 'minha-lista:tasks';

export function loadFromStorage(): any[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('loadFromStorage error', e);
    return [];
  }
}

export function saveToStorage(data: any[]) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('saveToStorage error', e);
  }
}
