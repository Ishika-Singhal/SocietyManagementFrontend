import React from "react";
import { Link } from "react-router-dom"; // Ensure react-router-dom is installed
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHeader,
  TableHead,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button"; // Adjust import based on your button library

// Replace 'student' with actual import if it's an image file
const student = "path-to-student-image.jpg";

interface MemberType {
  name: string;
  image: string;
  linkedin: string;
  x: string;
  email: string;
  batch: string;
  enrollmentNumber: string;
  branch: string;
  skills: string;
}

const members: MemberType[] = [
  {
    name: "Shivani Sharma",
    image: "https://cdn.pixabay.com/photo/2023/11/09/19/36/zoo-8378189_640.jpg",
    linkedin: "https://linkedin.com",
    x: "https://x.com",
    email: "jyotiahuja@gmail.com",
    batch: "2022-2026",
    enrollmentNumber: "04320802722",
    branch: "CSE",
    skills: "proficient in python and mysql",
  },
  // Add more member objects as needed
];

const tableClass = "text-center text-gray-800 text-xl border-x";

const MemberCard: React.FC<{ props: MemberType }> = ({ props }) => {
  return (
    <div className="flex items-center space-x-4">
      <img
        src={props.image}
        alt={props.name}
        className="w-16 h-16 rounded-full"
      />
      <div>
        <h3 className="text-lg font-semibold">{props.name}</h3>
        <p className="text-sm text-gray-600">{props.email}</p>
        <p className="text-sm text-gray-600">{props.linkedin}</p>
        <p className="text-sm text-gray-600">{props.x}</p>
      </div>
    </div>
  );
};

const SocietyMembers: React.FC = () => {
  return (
    <div>
      <div className="py-8 px-6 lg:px-20 bg-white mt-10">
        <h2 className="font-bold text-center text-4xl mb-4 text-gray-800">
          MEMBERS
        </h2>
        <div className="overflow-auto max-h-96">
          <Table className="bg-white border-t border-x shadow-lg table-auto">
            <TableHeader>
              <TableRow>
                <TableHead rowSpan={2} className={tableClass}>
                  S No.
                </TableHead>
                <TableHead rowSpan={2} className={tableClass}>
                  Society Members
                </TableHead>
                <TableHead colSpan={4} className={tableClass}>
                  Members Details
                </TableHead>
                <TableHead rowSpan={2} className={tableClass}>
                  Action
                </TableHead>
              </TableRow>
              <TableRow>
                <TableHead className={tableClass}>Batch</TableHead>
                <TableHead className={tableClass}>Enrollment no.</TableHead>
                <TableHead className={tableClass}>Branch</TableHead>
                <TableHead className={tableClass}>Skills</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {members.map((member, index) => (
                <TableRow key={index}>
                  <TableCell className="text-center border-x text-gray-800">
                    {index + 1}.
                  </TableCell>
                  <TableCell className="border-x">
                    <MemberCard props={member} />
                  </TableCell>
                  <TableCell className="text-center border-x text-lg text-gray-800">
                    {member.batch}
                  </TableCell>
                  <TableCell className="text-center border-x text-lg text-gray-800">
                    {member.enrollmentNumber}
                  </TableCell>
                  <TableCell className="text-center border-x text-lg text-gray-800">
                    {member.branch}
                  </TableCell>
                  <TableCell className="text-center border-x text-lg text-gray-800">
                    {member.skills}
                  </TableCell>
                  <TableCell className="text-center border-x text-lg text-gray-800">
                    <Button className="bg-blue-500 text-white py-1 px-3 rounded">
                      <Link to="/members/:id">View Profile</Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default SocietyMembers;
