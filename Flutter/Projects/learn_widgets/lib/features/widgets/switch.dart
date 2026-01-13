import 'package:flutter/material.dart';

import '../../core/resources/app_colors.dart';

class SwitchState extends StatefulWidget {
  const SwitchState({super.key});

  @override
  State<SwitchState> createState() => _SwitchState();
}

class _SwitchState extends State<SwitchState> {
  bool switchState = true;
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        setState(() {
          switchState = !switchState;
        });
      },

      child: switchState
          ? Icon(Icons.toggle_on, color: AppColors.primaryColor, size: 50)
          : Icon(Icons.toggle_off, color: AppColors.secondaryColor, size: 50),
    );
  }
}
