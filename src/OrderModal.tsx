import Modal from "react-modal";
interface OrderModalProps {
  isOpen: boolean;
  closeModal: () => void;
}
const OrderModal = ({ isOpen, closeModal }: OrderModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.85)", // черный фон с прозрачностью
        },
        content: {
          position: "absolute",
          top: "calc(50% - 95px)",
          left: "calc(50% - 150px)",
          height: "190px",
          width: "300px",
          border: "2px solid #d32f2f", // красная рамка
          background: "#1a1a1a", // черный фон
          color: "#fff", // белый текст
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "10px",
          outline: "none",
          padding: "32px",
          boxShadow: "0 0 24px 4px #d32f2f88", // красная тень
        },
      }}
    >
      <h2 style={{ color: "#d32f2f", marginBottom: "16px" }}>
        Спасибо за заказ❤️
      </h2>
      <p style={{ color: "#fff", marginBottom: "24px" }}>Ваш заказ принят</p>
      <button
        onClick={closeModal}
        style={{
          background: "#d32f2f",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          padding: "10px 24px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "16px",
          transition: "background 0.2s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.background = "#b71c1c")}
        onMouseOut={(e) => (e.currentTarget.style.background = "#d32f2f")}
      >
        Закрыть
      </button>
    </Modal>
  );
};

export default OrderModal;
