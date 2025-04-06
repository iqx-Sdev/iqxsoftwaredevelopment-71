
import { useContactModalStore } from "@/store/useContactModalStore";

export const useContactModal = () => {
  const { openModal } = useContactModalStore();

  const openContactModal = {
    forAutomation: () => openModal("automation"),
    forExpert: () => openModal("expert"),
    forDemo: () => openModal("demo"),
    forConsultation: () => openModal("consultation"),
    custom: (source: string) => openModal(source),
  };

  return { openContactModal };
};
