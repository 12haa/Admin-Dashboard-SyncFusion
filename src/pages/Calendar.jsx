import React from "react";
import { ScheduleComponent ,  ViewDirective , ViewsDirective , Day ,Week , WorkWeek , Month , Agenda , Inject , Resize , DrapAndDrop  } from "@syncfusion/ej2-react-schedule";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { scheduleData } from "../data/dummy";
import { Header } from "../components";
import { resize } from "@syncfusion/ej2/maps";
import { DragAndDrop } from "@syncfusion/ej2-react-schedule/src";




const Calendar = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header  
        category="App" title="Calender"
      />
      <ScheduleComponent
      height='650px'
        eventSettings={{
          dataSource : scheduleData}}
          selectedDate ={new Date(2021 , 0 , 10)}
       
      >
        <Inject services={[Day, Week , WorkWeek , Month , Agenda , Resize ,  DragAndDrop]} />


      </ScheduleComponent>



    </div>
  )
};

export default Calendar;
