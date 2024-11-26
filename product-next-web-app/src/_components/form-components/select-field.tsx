import { ErrorMessage, Field, useField } from 'formik';
import { ChevronDown } from 'lucide-react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  id: string;
  name: string;
  label: string;
  options: SelectOption[];
}

export function Select({ id, name, label, options }: SelectProps) {
  const [field, meta] = useField(name);

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-text-primary mb-1"
      >
        {label}
      </label>
      <div className="relative">
        <Field
          as="select"
          id={id}
          {...field}
          className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-1 bg-white appearance-none transition-colors ${
            meta.touched && meta.error
              ? 'border-warning focus:border-warning focus:ring-warning'
              : 'border-gray-200 focus:border-primary focus:ring-primary'
          }`}
        >
          <option value="">Select {label}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Field>
        <ChevronDown
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary pointer-events-none"
          size={20}
        />
      </div>
      <ErrorMessage
        name={name}
        component="div"
        className="mt-1 text-sm text-red-500 font-medium"
      />
    </div>
  );
}
