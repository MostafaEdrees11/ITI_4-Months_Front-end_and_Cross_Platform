import 'package:flutter/material.dart';
import 'package:learn_widgets/features/login/view.dart';

import '../../../../core/resources/app_colors.dart';
import '../../../widgets/profile_item.dart';
import '../../../widgets/switch.dart';

class ProfileScreen extends StatefulWidget {
  const ProfileScreen({super.key});

  @override
  State<ProfileScreen> createState() => _ProfileScreenState();
}

class _ProfileScreenState extends State<ProfileScreen> {
  bool isSwitchOn = true;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        backgroundColor: Colors.white,
        centerTitle: true,
        leading: SizedBox.shrink(),
        title: Text(
          "Profile",
          style: TextStyle(
            color: AppColors.primaryColor,
            fontSize: 24,
            fontWeight: FontWeight.w700,
          ),
        ),
        elevation: 0,
        scrolledUnderElevation: 0,
      ),

      body: Padding(
        padding: const EdgeInsets.fromLTRB(24, 32, 24, 32),
        child: Container(
          color: Colors.white,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              ProfileItem(
                preTitleIcon: Icon(
                  Icons.person,
                  color: AppColors.secondaryColor,
                  size: 35,
                ),
                profileItemTitle: "Edit Profile",
              ),
              ProfileItem(
                preTitleIcon: Icon(
                  Icons.key,
                  color: AppColors.secondaryColor,
                  size: 35,
                ),
                profileItemTitle: "Change Password",
              ),
              ProfileItem(
                preTitleIcon: Icon(
                  Icons.credit_card,
                  color: AppColors.secondaryColor,
                  size: 35,
                ),
                profileItemTitle: "My Cards",
              ),
              SizedBox(height: 16),
              Text(
                "App Settings",
                style: TextStyle(
                  color: AppColors.primaryColor,
                  fontSize: 22,
                  fontWeight: FontWeight.w700,
                ),
              ),
              SizedBox(height: 16),
              ProfileItem(
                preTitleIcon: Icon(
                  Icons.notifications,
                  color: AppColors.secondaryColor,
                  size: 35,
                ),
                profileItemTitle: "Notifications",
                showArrow: false,
                // leadingWidget: SwitchState(),
                leadingWidget: Switch(
                  value: isSwitchOn,
                  onChanged: (value) {
                    setState(() {
                      isSwitchOn = value;
                    });
                  },
                  activeColor: AppColors.primaryColor,
                  inactiveThumbColor: AppColors.secondaryColor,
                ),
              ),
              ProfileItem(
                preTitleIcon: Icon(
                  Icons.g_translate,
                  color: AppColors.secondaryColor,
                  size: 35,
                ),
                profileItemTitle: "Language",
                showArrow: false,
                leadingWidget: Row(
                  children: [
                    Text(
                      "English",
                      style: TextStyle(
                        color: AppColors.secondaryColor,
                        fontSize: 16,
                        fontWeight: FontWeight.w400,
                      ),
                    ),
                    SizedBox(width: 8),
                    Icon(
                      Icons.arrow_forward_ios,
                      color: AppColors.secondaryColor,
                      size: 20,
                    ),
                  ],
                ),
              ),
              GestureDetector(
                onTap: () {
                  Navigator.of(context).pushReplacement(
                    MaterialPageRoute(builder: (context) => LoginScreen()),
                  );
                },
                child: ProfileItem(
                  preTitleIcon: Icon(
                    Icons.logout,
                    color: AppColors.secondaryColor,
                    size: 35,
                  ),
                  profileItemTitle: "Logout",
                  showArrow: false,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

/*
class ProfileScreen extends StatelessWidget {
  const ProfileScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        backgroundColor: Colors.white,
        centerTitle: true,
        leading: SizedBox.shrink(),
        title: Text(
          "Profile",
          style: TextStyle(
            color: AppColors.primaryColor,
            fontSize: 24,
            fontWeight: FontWeight.w700,
          ),
        ),
        elevation: 0,
        scrolledUnderElevation: 0,
      ),

      body: Padding(
        padding: const EdgeInsets.fromLTRB(24, 32, 24, 32),
        child: Container(
          color: Colors.white,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              ProfileItem(
                preTitleIcon: Icon(
                  Icons.person,
                  color: AppColors.secondaryColor,
                  size: 35,
                ),
                profileItemTitle: "Edit Profile",
              ),
              ProfileItem(
                preTitleIcon: Icon(
                  Icons.key,
                  color: AppColors.secondaryColor,
                  size: 35,
                ),
                profileItemTitle: "Change Password",
              ),
              ProfileItem(
                preTitleIcon: Icon(
                  Icons.credit_card,
                  color: AppColors.secondaryColor,
                  size: 35,
                ),
                profileItemTitle: "My Cards",
              ),
              SizedBox(height: 16),
              Text(
                "App Settings",
                style: TextStyle(
                  color: AppColors.primaryColor,
                  fontSize: 22,
                  fontWeight: FontWeight.w700,
                ),
              ),
              SizedBox(height: 16),
              ProfileItem(
                preTitleIcon: Icon(
                  Icons.notifications,
                  color: AppColors.secondaryColor,
                  size: 35,
                ),
                profileItemTitle: "Notifications",
                showArrow: false,
                leadingWidget: SwitchState(),
              ),
              ProfileItem(
                preTitleIcon: Icon(
                  Icons.g_translate,
                  color: AppColors.secondaryColor,
                  size: 35,
                ),
                profileItemTitle: "Language",
                showArrow: false,
                leadingWidget: Row(
                  children: [
                    Text(
                      "English",
                      style: TextStyle(
                        color: AppColors.secondaryColor,
                        fontSize: 16,
                        fontWeight: FontWeight.w400,
                      ),
                    ),
                    SizedBox(width: 8),
                    Icon(
                      Icons.arrow_forward_ios,
                      color: AppColors.secondaryColor,
                      size: 20,
                    ),
                  ],
                ),
              ),
              GestureDetector(
                onTap: () {
                  Navigator.of(context).pushReplacement(
                    MaterialPageRoute(builder: (context) => LoginScreen()),
                  );
                },
                child: ProfileItem(
                  preTitleIcon: Icon(
                    Icons.logout,
                    color: AppColors.secondaryColor,
                    size: 35,
                  ),
                  profileItemTitle: "Logout",
                  showArrow: false,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
*/
