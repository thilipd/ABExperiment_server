import { isEmpty, isEmail, isLength, isJSON, isNumber, isString, isBoolean } from '../../../utils/validators';



class AuthValidator {


    static register(req, res, next) {

        const { first_name, last_name, email, password, confirmPassword } = req.body;
        const errors = {};

        if (isEmpty(email)) {
            errors.email = req.__('VALIDATIONS.required', 'Email');
        } else if (!isEmail(email)) {
            errors.email = req.__('VALIDATIONS.valid_value', 'Email');
        }
        if (isEmpty(fname)) {
            errors.fname = req.__('VALIDATIONS.required', 'fname');
        }
        if (isEmpty(lname)) {
            errors.lname = req.__('VALIDATIONS.required', 'lname');
        }
        if (isEmpty(role)) {
            errors.role = req.__('VALIDATIONS.required', 'role');
        }


    }

}