import 'package:flutter/material.dart';
import 'package:learn_widgets/core/resources/app_colors.dart';
import 'package:learn_widgets/core/resources/app_field.dart';

class CustomPasswordField extends StatefulWidget {
  const CustomPasswordField({super.key, required this.hintText});

  final String hintText;

  @override
  State<CustomPasswordField> createState() => _CustomPasswordFieldState();
}

class _CustomPasswordFieldState extends State<CustomPasswordField> {
  bool isHidden = true;
  @override
  Widget build(BuildContext context) {
    return AppField(
      hintText: widget.hintText,
      isHidden: isHidden,
      endIcon: GestureDetector(
        onTap: () {
          setState(() {
            isHidden = !isHidden;
          });
        },
        child: isHidden
            ? Icon(Icons.visibility_off, color: AppColors.primaryColor)
            : Icon(Icons.remove_red_eye, color: AppColors.primaryColor),
      ),
    );
  }
}
