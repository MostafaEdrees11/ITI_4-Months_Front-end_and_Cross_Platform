import 'package:flutter/material.dart';

import 'app_colors.dart';

class AppField extends StatelessWidget {
  const AppField({
    super.key, required this.hintText, required this.endIcon, this.isHidden = false,
  });

  final String hintText;
  final Widget endIcon;
  final bool isHidden;

  @override
  Widget build(BuildContext context) {
    return TextFormField(
      obscureText: isHidden,
      decoration: InputDecoration(
        filled: true,
        fillColor: AppColors.formColor,
        hintText: hintText,
        suffixIcon: endIcon,
        enabledBorder: OutlineInputBorder(
          borderSide: BorderSide(color: Colors.transparent),
        ),
        focusedBorder: OutlineInputBorder(
          borderSide: BorderSide(color: AppColors.primaryColor),
        ),
        errorBorder: OutlineInputBorder(
          borderSide: BorderSide(color: Colors.red),
        ),
      ),
    );
  }
}