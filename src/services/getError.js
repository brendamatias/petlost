import { toast } from 'react-toastify';

export default (err, messageDefault = 'Ocorreu um erro interno') => {
  const { response } = err;

  if (response?.data?.errors) {
    for (let i = 0; i < response.data.errors.length; i += 1) {
      toast.error(
        `${response.data.errors[i].field} ${response.data.errors[i].message}`
      );
    }
  } else {
    toast.error(response?.data?.error?.message || messageDefault);
  }
};
