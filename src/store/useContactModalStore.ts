
import { create } from 'zustand';

type ContactModalStore = {
  isOpen: boolean;
  source: string;
  openModal: (source: string) => void;
  closeModal: () => void;
};

export const useContactModalStore = create<ContactModalStore>((set) => ({
  isOpen: false,
  source: '',
  openModal: (source) => set({ isOpen: true, source }),
  closeModal: () => set({ isOpen: false }),
}));
