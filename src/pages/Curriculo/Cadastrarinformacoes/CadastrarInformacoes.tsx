
import styles from "../../../components/forms/Input/Input.module.css";
import Input from "../../../components/forms/Input/Input";
import Textarea from "../../../components/forms/textarea/textarea";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";



interface FormValues {
    foto: string;
    nome: string;
    cargo: string;
    resumo: string;
};

const CadastrarInformacoes: React.FC = () => {

    const initialValues: FormValues = {
        foto: '',
        nome: '',
        cargo: '',
        resumo: ''
    };

    const validationSchema = Yup.object().shape({
        foto: Yup.string().required('Campo obrigatório'),
        nome: Yup.string().required('Campo obrigatório'),
        cargo: Yup.string().required('Campo obrigatório'),
        resumo: Yup.string().required('Campo obrigatório')
    });

    const onSubmit = (values: FormValues, { resetForm }: { resetForm: () => void }) => {
        //Lógica de envio para backend
        console.log(values);
        resetForm();
        alert('Formulário enviado com sucesso!');
        
    };

    return (
        <div className={styles.formWrapper}>
            
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>

            {({ errors, touched }) => (

            <Form className={styles.form}>

                <h2 className={styles.title}> Cadastradar Informações </h2>
                
                        <Input
                            label="Foto"
                            name="foto"
                            errors={errors.foto}
                            touched={touched.foto}
                        />

                        <Input
                            label="Nome"
                            name="nome"
                            errors={errors.nome}
                            touched={touched.nome}
                        />

                        <Input
                            label="Cargo"
                            name="cargo"
                            errors={errors.cargo}
                            touched={touched.cargo}
                        />

                        <Textarea
                            label="Resumo"
                            name="resumo"
                            errors={errors.resumo}
                            touched={touched.resumo}
                        />

                        <button type="submit" className={styles.button}>Salvar</button>

            
            </Form>
            )}
            </Formik>

        </div>
    );
};

export default CadastrarInformacoes;