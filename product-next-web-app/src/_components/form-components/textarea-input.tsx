import { ErrorMessage, Field, useField } from 'formik';

interface TextareaInputProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  rows?: number;
}

export function TextareaInput({
  id,
  name,
  label,
  placeholder,
  rows = 4,
}: TextareaInputProps) {
  const [field, meta] = useField(name);

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-text-primary mb-1"
      >
        {label}
      </label>
      <Field
        as="textarea"
        id={id}
        {...field}
        rows={rows}
        className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-1 bg-white transition-colors ${
          meta.touched && meta.error
            ? 'border-warning focus:border-warning focus:ring-warning'
            : 'border-gray-200 focus:border-primary focus:ring-primary'
        }`}
        placeholder={placeholder}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="mt-1 text-sm text-red-500 font-medium"
      />
    </div>
  );
}
