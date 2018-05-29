import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class FirebaseAuthService {

  constructor(private firebase: AngularFireAuth) {}

  signUp(user) {
    return this.firebase.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  logIn(user) {
    return this.firebase.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  logOut() {
    return this.firebase.auth.signOut();
  }

  verifyAccount() {
    const user = this.firebase.auth.currentUser;
    user.sendEmailVerification().then(function() {
      console.log('verification e-mail send');
    }).catch(function(error) {
      console.log('varification e-mail sending error');
    });
  }

  sendPasswordResetByEmail(){
    const auth = this.firebase.auth;
    const emailAddress = this.firebase.auth.currentUser.email;
    auth.sendPasswordResetEmail(emailAddress).then(function() {
      console.log('password reset e-mail send');
    }).catch(function(error) {
      console.log('password reset e-mail sending error!');
    });
  }

  deleteUser(){
    const user = this.firebase.auth.currentUser;
    user.delete().then(function() {
      console.log('user successfully deleted');
    }).catch(function(error) {
      console.log('user deleting error');
    });
  }

  reAuthUser(){
    const user = this.firebase.auth.currentUser;
    let credential;

    // Prompt the user to re-provide their sign-in credentials

    user.reauthenticateWithCredential(credential).then(function() {
      console.log('user reauthentificated successfully');
    }).catch(function(error) {
      console.log('user reauthentificatind error');
    });
  }

}


