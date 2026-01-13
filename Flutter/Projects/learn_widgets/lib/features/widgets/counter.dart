import 'package:flutter/material.dart';

import '../../core/resources/app_colors.dart';

class Counter extends StatefulWidget {
  const Counter({super.key});

  @override
  State<Counter> createState() => _CounterState();
}

class _CounterState extends State<Counter> {
  int counter = 0;

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        GestureDetector(
          onTap: (){
            setState(() {
              if(counter == 0) return;
              counter--;
            });
          },
          child: Container(
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(35),
            ),
            child: Padding(
              padding: const EdgeInsets.all(2.0),
              child: Icon(
                Icons.remove,
                color: AppColors.secondaryColor,
              ),
            ),
          ),
        ),
        SizedBox(width: 4),
        Text(
          "$counter",
          style: TextStyle(
            color: AppColors.secondaryColor,
            fontSize: 18,
            fontWeight: FontWeight.w400,
          ),
        ),
        SizedBox(width: 4),
        GestureDetector(
          onTap: (){
            setState(() {
              counter++;
            });
          },
          child: Container(
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(25.0),
            ),
            child: Padding(
              padding: const EdgeInsets.all(2.0),
              child: Icon(
                Icons.add,
                color: AppColors.secondaryColor,
              ),
            ),
          ),
        ),
      ],
    );
  }
}
