import 'package:flutter/material.dart';
import 'package:learn_widgets/core/resources/app_colors.dart';

class ProfileItem extends StatelessWidget {
  const ProfileItem({
    super.key,
    required this.preTitleIcon,
    required this.profileItemTitle,
    this.showArrow = true,
    this.leadingWidget,
  });

  final Icon preTitleIcon;
  final bool showArrow;
  final String profileItemTitle;
  final Widget? leadingWidget;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Row(
              children: [
                preTitleIcon,
                SizedBox(width: 8),
                Text(
                  profileItemTitle,
                  style: TextStyle(
                    color: AppColors.secondaryColor,
                    fontSize: 18,
                    fontWeight: FontWeight.w700,
                  ),
                ),
              ],
            ),
            Container(
              child: showArrow?
              Icon(
                Icons.arrow_forward_ios,
                color: AppColors.secondaryColor,
                size: 20,
              ) : leadingWidget,
            ),
          ],
        ),
        SizedBox(height: 16),
      ],
    );
  }
}
