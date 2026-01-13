import 'package:flutter/material.dart';
import 'package:learn_widgets/core/resources/app_colors.dart';
import 'package:learn_widgets/core/resources/app_field.dart';
import 'package:learn_widgets/features/home_nav/screens/home/view.dart';
import 'package:learn_widgets/features/home_nav/view.dart';
import 'package:learn_widgets/features/login/view.dart';
import 'package:learn_widgets/features/widgets/custom_password_field.dart';


class SignUpScreen extends StatelessWidget {
  const SignUpScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        backgroundColor: Colors.white,
        centerTitle: true,
        title: Text(
          "Sign Up",
          style: TextStyle(
            color: AppColors.primaryColor,
            fontSize: 24,
            fontWeight: FontWeight.w400,
          ),
        ),
        leading: GestureDetector(
          onTap: () {
            Navigator.pop(context);
          },
          child: Padding(
            padding: const EdgeInsets.all(16.0),
            child: Icon(Icons.arrow_back_ios, color: AppColors.primaryColor),
          ),
        ),
        elevation: 0,
        scrolledUnderElevation: 0,
      ),

      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Padding(
                padding: const EdgeInsets.all(16.0),
                child: Image.asset("assets/images/login.png", height: 200),
              ),
              Container(
                padding: EdgeInsets.symmetric(horizontal: 8),
                child: Text(
                  "Please enter your information to \ncreate an account.",
                  style: TextStyle(
                    color: AppColors.secondaryColor,
                    fontSize: 18,
                    fontWeight: FontWeight.w400,
                  ),
                ),
              ),
              SizedBox(height: 8),
              AppField(hintText: "Name", endIcon: SizedBox()),
              SizedBox(height: 8),
              AppField(hintText: "Email", endIcon: SizedBox()),
              SizedBox(height: 8),
              CustomPasswordField(hintText: "Password"),
              SizedBox(height: 8),
              CustomPasswordField(hintText: "Confirm Password"),
              SizedBox(height: 24),
              ElevatedButton(
                onPressed: () {
                  Navigator.of(context).pushReplacement(
                    MaterialPageRoute(builder: (context) => LoginScreen()),
                  );
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: AppColors.primaryColor,
                  fixedSize: Size(double.infinity, 50),
                ),
                child: Text(
                  "Sign Up",
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 17,
                    fontWeight: FontWeight.w400,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
