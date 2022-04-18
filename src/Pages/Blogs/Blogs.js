import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='text-align-center'>Blogs</h1>
            <div className='blogs'>
                <div>
                    <h3> Difference between authorization and authentication </h3>
                    <p>Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to.


                        So, what is the difference between authentication and authorization? Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board. The first step is to confirm the identity of a passenger to make sure they are who they say they are. Once a passenger’s identity has been determined, the second step is verifying any special services the passenger has access to, whether it’s flying first-class or visiting the VIP lounge.


                        Authentication is the act of validating that users are whom they claim to be. This is the first step in any security process.

                        Complete an authentication process with:

                        Passwords. Usernames and passwords are the most common authentication factors. If a user enters the correct data, the system assumes the identity is valid and grants access.
                        One-time pins. Grant access for only one session or transaction.
                        Authentication apps. Generate security codes via an outside party that grants access.
                        Biometrics. A user presents a fingerprint or eye scan to gain access to the system.

                        Authorization in system security is the process of giving the user permission to access a specific resource or function. This term is often used interchangeably with access control or client privilege.

                        Giving someone permission to download a particular file on a server or providing individual users with administrative access to an application are good examples of authorization.

                        In secure environments, authorization must always follow authentication. Users should first prove that their identities are genuine before an organization’s administrators grant them access to the requested resources.</p>
                </div>

                <div>
                    <h3> Why are you using firebase? What other options do you have to implement authentication?</h3>
                    <p>
                        Firebase Authentication makes building secure sign-ins for any platform easy. This end-to-end solution supports email and passowrd, phone auth, & mult-platform login. Monitor App Performance. For Mobile or Web Apps. Build Extraordinary Apps.

                        Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

                        You can use Firebase Authentication to allow users to sign in to your app using one or more sign-in methods, including email address and password sign-in, and federated identity providers such as Google Sign-in and Facebook Login. This tutorial gets you started with Firebase Authentication by showing you how to add email address and
                        And Firebase Authentication is built around openness and security. It leverages OAuth 2.0 and OpenID Connect, industry standards designed for security, interoperability, and portability.
                    </p>
                </div>
                <div>
                    <h3>What other services does firebase provide other than authentication</h3>
                    <p>
                        Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.
                        Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

                        Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.


                        The goal of every developer is to create awesome apps.  If you’re a developer, we are here to help you discover some of the best alternatives to Firebase to help take your mobile app development a notch higher.

                        Firebase frees developers to focus crafting fantastic user experiences. You don’t need to manage servers. You don’t need to write APIs. Firebase is your server, your API and your datastore, all written so generically that you can modify it to suit most needs. Yeah, you’ll occasionally need to use other bits of the Google Cloud for your advanced applications. Firebase can’t be everything to everybody. But it gets pretty close.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;