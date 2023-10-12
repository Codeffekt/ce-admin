import { AbstractControl } from '@angular/forms';
import { AccountSettings } from '@codeffekt/ce-core-data';

export class UserValidators {

    static HasPassword(account: AccountSettings) {
        return (formControl: AbstractControl): { [key: string]: boolean } | null => {
            const hasPassword = (account.passwd && account.passwd.length > 0);
            const passwd = formControl.value.passwd;
            if (!hasPassword && !passwd) {
                return { HasPassword: true };
            }
            return null;
        };
    }

    static MatchPassword(formControl: AbstractControl) {
        const password = formControl.value.passwd;
        const confirmPassword = formControl.value.confirmPassword;
        if (password !== confirmPassword) {
            formControl.get('confirmPassword')?.setErrors({ MisMatchPassword: true });
            return;
        }
    }
}
