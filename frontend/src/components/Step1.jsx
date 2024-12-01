import { useForm } from "react-hook-form";

const Step1 = ({ nextStep, formData, setFormData }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 1: Personal Info</h2>
      <input {...register("name", { required: "Name is required" })} placeholder="Name" />
      {errors.name && <p>{errors.name.message}</p>}

      <input {...register("age", { required: "Age is required" })} placeholder="Age" />
      {errors.age && <p>{errors.age.message}</p>}

      <button type="submit">Next</button>
    </form>
  );
};

export default Step1;
