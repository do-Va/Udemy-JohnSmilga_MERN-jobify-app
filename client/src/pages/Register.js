import { useState, useEffect } from 'react';
import { Logo, FormRow, Alert } from '../components';
import { useAppContext } from '../context/appContext';

import Wrapper from '../assets/wrappers/RegisterPage';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  // TODO global state and useNavigate
  const { isLoading, showAlert } = useAppContext();

  // #region Methods
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = e => {
    console.log(e.target);
  };

  const onSubmit = e => {
    e.preventDefault();

    console.log(e.target);
  };
  // #endregion

  return (
    <Wrapper className="full-page">
      {
        // #region Form
      }
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>

        {showAlert && <Alert />}

        {
          // #region FormRow
        }

        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}

        <FormRow
          type="text"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />

        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        {
          // #endregion
        }

        <button type="submit" className="btn btn-block">
          submit
        </button>

        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
      {
        // #endregion Form
      }
    </Wrapper>
  );
};

export default Register;
