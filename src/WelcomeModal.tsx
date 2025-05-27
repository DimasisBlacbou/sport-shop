import Modal from "react-modal";
interface WelcomeModalProps {
  isOpen: boolean;
  closeModal: () => void;
}
const WelcomeModal = ({ isOpen, closeModal }: WelcomeModalProps) => {
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
          border: "2px solid rgb(45, 235, 16)", // красная рамка
          background: "#1a1a1a", // черный фон
          color: "#fff", // белый текст
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "10px",
          outline: "none",
          padding: "32px",
          boxShadow: "0 0 30px 6px rgba(2, 103, 30, 0.53)", // красная тень
        },
      }}
    >
      <h2 style={{ color: "rgb(45, 235, 16)", marginBottom: "16px" }}>
        Добро пожаловать на сайт ❤️❤️
      </h2>
      <p style={{ color: "#fff", marginBottom: "24px" }}>Рады вас видеть</p>
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
        onMouseOver={(e) =>
          (e.currentTarget.style.background = "rgb(45, 235, 16)")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.background = "rgb(23, 141, 5)")
        }
      >
        Закрыть
      </button>
    </Modal>
  );
};

export default WelcomeModal;
