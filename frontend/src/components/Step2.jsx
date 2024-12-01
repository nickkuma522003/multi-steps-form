import { useForm } from "react-hook-form";

const Step2 = ({ nextStep, prevStep, formData, setFormData }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 2: Contact Info</h2>
      <input {...register("email", { required: "Email is required" })} placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}

      <input {...register("phone", { required: "Phone is required" })} placeholder="Phone" />
      {errors.phone && <p>{errors.phone.message}</p>}

      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default Step2;
