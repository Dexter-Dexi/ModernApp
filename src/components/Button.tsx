interface style {
  styles: string;
}

//?____________________

const Button = ({ styles }: style) => {
  return (
    <button
      className={`py-4 px-6 bg-blue-gradient my-5 rounded-xl font-poppins font-medium text-primary ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
