export interface AlumnosProps {
  nombre: string;
  grado: string;
  edad: number;
  curso: string;
  nota: number;
}

export default function Alumno({
  nombre,
  grado,
  edad,
  curso,
  nota,
}: AlumnosProps) {
  return (
    <>
      <p>{nombre}</p>
      <tr>
        <td>{nombre}</td>
        <td>{grado}</td>
        <td>{edad}</td>
        <td>{curso}</td>
        <td>{nota}</td>
      </tr>
    </>
  );
}
