import { Edit, Trash, UserRoundPlus } from "lucide-react";
// import student from '../../../assets/studentpic.jpeg'
import { Link } from "react-router-dom";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../../components/ui/table";
import { Card, CardContent } from "../../../components/ui/card";
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";

const galleries = [
    {
        id: '1',
        galleryID: '9250',
        image: 'link',
    },
    {
        id: '2',
        galleryID: '9250',
        image: 'link',
    },
    {
        id: '3',
        galleryID: '9250',
        image: 'link',
    },
    {
        id: '4',
        galleryID: '9250',
        image: 'link',
    },
    {
        id: '5',
        galleryID: '9250',
        image: 'link',
    },
    {
        id: '6',
        galleryID: '9250',
        image: 'link',
    },
    {
        id: '7',
        galleryID: '9250',
        image: 'link',
    },
]
const Gallery_table = () => {
    return (
        <div className='flex flex-col'>
            <Card className="m-4 mt-7">
                <CardContent className="p-2">
                    <div className="flex flex-wrap gap-2 justify-between items-center px-3 w-full ">
                        <Input
                            type="text"
                            placeholder="Search"
                            className="bg-slate-100 w-56 outline-none px-5 rounded-full py-2"
                        />
                        <Link className="bg-blue-700 px-4 py-2 rounded-full text-white flex gap-5" to='/admin/gallery/add'>
                            <UserRoundPlus fill="white" />
                            <div>New Gallery</div>
                        </Link>
                    </div>
                </CardContent>
            </Card>
            <Card className="p-0 m-4 mt-7 h-96 overflow-y-auto">
                <CardContent className="p-0 overflow-y-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="text-blue-700">
                                <TableHead className="text-right w-[100px] font-bold text-xl">
                                    SocietyID
                                </TableHead>
                                <TableHead className="text-right w-[100px] font-bold text-xl">
                                    GalleryID
                                </TableHead>
                                <TableHead className="font-bold text-center text-xl">
                                    Image Link
                                </TableHead>
                                <TableHead className="font-bold text-center text-xl">
                                    Actions            
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {galleries.map((galleries, index) => {
                                return (
                                    <TableRow key={index} className="border-none">
                                        <TableCell className="text-center">
                                            <h1 className="font-bold">{galleries.id}</h1>
                                        </TableCell>
                                        <TableCell className="text-center">{galleries.galleryID}</TableCell>
                                        <TableCell className="text-center">{galleries.image}</TableCell>
                                        <TableCell className="flex justify-center gap-5">
                                            <Link to='/admin/gallery/update'>
                                                <Button className="text-blue-700"><Edit /></Button>
                                            </Link>
                                            <Button className="text-red-700"><Trash /></Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}

export default Gallery_table