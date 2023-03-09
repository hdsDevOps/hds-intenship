export interface NoLabelInput {
  id: string;
  type: string;
  placeholder: string;
  value: string;
  name: string;
  required?: boolean;
  n_class?: string;
}

export interface LabelInput {
  label: {
    htmlFor: string;
    l_class?: string;
    text: string;
  };
  input: {
    id: string;
    type: string;
    name: string;
    placeholder?: string;
    pattern?: string;
    value: string;
    required?: boolean;
    n_class?: string;
  };
}
