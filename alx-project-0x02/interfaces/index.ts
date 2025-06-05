export interface CardProps {
  title: string;
  content: string;
}

export interface PostModalProps {
    onSubmit: (title: string, content: string) => void;
    onClose: () => void;
    isOpen: boolean;
  }