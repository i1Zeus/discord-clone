import { create } from "zustand";
import { ChannelType, Server } from "@prisma/client";

export type ModalType =
  | "create-server"
  | "edit-server"
  | "leave-server"
  | "delete-server"
  | "create-channel"
  | "delete-channel"
  | "edit-channel"
  | "invite-member"
  | "members";

interface ModalData {
  server?: Server;
  channelType?: ChannelType;
}

interface ModalStore {
  type: ModalType | null;
  data: ModalData;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false }),
}));
