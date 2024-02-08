"use client";
import { Group, Avatar, Text, Accordion } from "@mantine/core";
import { NavLink } from "@mantine/core";
import classes from "./styles.css";

function CoursesLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" />
    </svg>
  );
}
function StudentsLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d="M40-160v-160q0-34 23.5-57t56.5-23h131q20 0 38 10t29 27q29 39 71.5 61t90.5 22q49 0 91.5-22t70.5-61q13-17 30.5-27t36.5-10h131q34 0 57 23t23 57v160H640v-91q-35 25-75.5 38T480-200q-43 0-84-13.5T320-252v92H40Zm440-160q-38 0-72-17.5T351-386q-17-25-42.5-39.5T253-440q22-37 93-58.5T480-520q63 0 134 21.5t93 58.5q-29 0-55 14.5T609-386q-22 32-56 49t-73 17ZM160-440q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T280-560q0 50-34.5 85T160-440Zm640 0q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T920-560q0 50-34.5 85T800-440ZM480-560q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-680q0 50-34.5 85T480-560Z" />
    </svg>
  );
}
function ServicesLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d="M40-120v-80h880v80H40Zm120-120q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240H160Zm0-80h640v-440H160v440Zm0 0v-440 440Z" />
    </svg>
  );
}

function CourseNav() {
  return (
    <>
      <NavLink
        href="/courses/schedule"
        label="Schedule"
        description="Additional information"
      />
      <NavLink
        href="/courses/viewCourses"
        label="View Courses"
        description="Additional information"
      />
      <NavLink
        href="/courses/addDrop"
        label="Add/Drop Course"
        description="Additional information"
      />
      <NavLink
        href="/courses/rollCall"
        label="Roll Call"
        description="Additional information"
      />
      <NavLink
        href="/courses/classroom"
        label="Classroom"
        description="Additional information"
      />
      <NavLink
        href="/courses/homework"
        label="Homework"
        description="Additional information"
      />
      <NavLink
        href="/courses/exams"
        label="Tests and Exams"
        description="Additional information"
      />
    </>
  );
}

function StudentsNav() {
  return (
    <>
      <NavLink
        href="/student/profile"
        label="Your Profile"
        description="Additional information"
      />
      <NavLink
        href="/student/scores"
        label="Your Scores"
        description="Additional information"
      />
      <NavLink
        href="/student/attendance"
        label="Your Attendance"
        description="Additional information"
      />
      <NavLink
        href="applyorReserve"
        label="Apply or Reserve"
        description="Additional information"
      />
      <NavLink
        href="/student/vote"
        label="Vote!"
        description="Additional information"
      />
    </>
  );
}

function ServicesNav() {
  return (
    <>
      <NavLink
        href="/services/mail"
        label="Mail"
        description="Additional information"
      />
      <NavLink
        href="/services/announcements"
        label="Announcements"
        description="Additional information"
      />
      <NavLink
        href="/services/softCloud"
        label="SoftCloud"
        description="Additional information"
      />
      <NavLink
        href="/services/vcpai"
        label="VCP-AI"
        description="Additional information"
      />
      <NavLink
        href="/services/netStatus"
        label="Network Status"
        description="Additional information"
      />
    </>
  );
}

const groceries = [
  {
    emoji: <CoursesLogo />,
    value: "Courses",
    description: <CourseNav />,
  },
  {
    emoji: <StudentsLogo />,
    value: "Student",
    description: <StudentsNav />,
  },
  {
    emoji: <ServicesLogo />,
    value: "Services",
    description: <ServicesNav />,
  },
];

export default function Demo() {
  // See groceries data above
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <div className="mx-5 lg:flex lg:items-center lg:justify-center">
      <Accordion
        variant="separated"
        radius="xl"
        defaultValue="Courses"
        styles={{
          item: { backgroundColor: "aliceblue" },
        }}
        className="lg:w-1/3"
      >
        {items}
      </Accordion>
    </div>
  );
}
