export interface ProductosProps {
  image: string;
  title: string;
  text: string;
}

export const Producto= ({image, title, text}: ProductosProps) => {
  return (
    <div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default Producto;
