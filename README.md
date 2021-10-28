# workday-scheduler-Challenge
This challenge was to build a simple work scheduling task planner using third party APIs (Bootstrap, Moment, FontAwesome...etc.)

I used Jquery methods to check the current time against the time blocks on the app to color code them according to their status.  If the block is in the past, then it gets a grey color; present = red color; future = green color.

Tasks are entered into the text input area and then saved locally by clicking the blue save button on that block.  The tasks then remain displayed (and in local storage) even after the app is closed and reopened.  They will only change if the user makes a change to them (or clears their local storage).  Then that new data is sent to local storage to overwrite the existing data for that time block.

I added the local time at the top with the date because I thought it might make a nice user experience to see it at the top of their planner.



## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## URLs and Screenshot

Github:
https://github.com/LeahFusari/workday-scheduler-challenge

Deployed:
https://leahfusari.github.io/workday-scheduler-challenge/

Screenshot:
![image](https://user-images.githubusercontent.com/87339742/139323059-d4adcff8-edfe-48ed-8cb8-7e4597949ecd.png)

