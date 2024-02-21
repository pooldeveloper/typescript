import Alumno, { AlumnosProps } from "@/components/Alumno";
import { useForm } from "react-hook-form";
import { useState } from "react";

const datas: AlumnosProps[] = [
    {
        nombre: "Pool",
        grado: "Quinto",
        edad: 18,
        curso: "Algebra",
        nota: 19,
    },
    {
        nombre: "Juan",
        grado: "Quinto",
        edad: 18,
        curso: "Algebra",
        nota: 19,
    },
    {
        nombre: "Marcos",
        grado: "Quinto",
        edad: 18,
        curso: "Algebra",
        nota: 19,
    },
];

export default function AlumnosPage() {
    const [alumnos, setAlumnos] = useState<AlumnosProps[]>(datas);

    const { register, handleSubmit } = useForm();

    const onSubmit = (d: any) => {
        console.log(d);
        setAlumnos(prev=> prev.concat(d));
    };
    console.log(alumnos);

    return (
        <main>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Nombre
                    <input type="text" {...register("nombre")} />
                </label>
                <label>
                    Grado
                    <input type="text" {...register("grado")} />
                </label>
                <label>
                    Edad
                    <input type="text" {...register("edad")} />
                </label>
                <label>
                    Curso
                    <input type="text" {...register("curso")} />
                </label>
                <label>
                    Nota
                    <input type="text" {...register("nota")} />
                </label>
                <input type="submit" value="Añadir" />
            </form>
            <br />
            <table>
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Grado</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Curso</th>
                        <th scope="col">Nota</th>
                    </tr>
                </thead>
                <tbody>
                    {datas.map((alumno) => (
                        <Alumno key={alumno.nombre} {...alumno} />
                    ))}
                </tbody>

            </table>
        </main>
    );
}
