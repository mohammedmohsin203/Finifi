import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import logo from "../../public/Rectangle 3.png";
import Image from "next/image";
import {
  ArrowLeft,
  Bell,
  Download,
  File,
  Home,
  Info,
  Settings,
  Share,
  Webcam,
} from "lucide-react";
import Avatarprops from "@/components/avatar-props";
import Tabsprops from "@/components/tabs-props";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-4 border-b sm:px-6">
        <div className="flex items-center space-x-4">
          <Image
            src={logo}
            className="w-6 h-6 "
            width="100"
            height="100"
            alt="image"
          />
          <h1 className="text-xl font-semibold">Manage Vendor</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden sm:block">
            Save Draft
          </Button>
          <Button>Submit</Button>
          <div className="relative">
            <Bell className="w-6 h-6" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
          </div>
          <div className="flex items-center space-x-2">
            <Avatarprops />
            <div className="hidden sm:block">
              <p className="text-sm font-medium">Rohit Sharma</p>
              <p className="text-xs text-muted-foreground">
                rohit.sharma@growquest.in
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-1 ">
        <aside className="hidden w-16 p-4 border-r md:block bg-blue-50">
          <nav className="flex flex-col items-center space-y-12 ">
            <Link href="/">
              <Home className="w-6 h-6" />
            </Link>
            <File className="w-6 h-6" />
            <Settings className="w-6 h-6" />
          </nav>
        </aside>

        <main className="flex-1 p-4 space-y-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-center">
            <div className="flex items-center space-x-2">
              <ArrowLeft className="w-6 h-6 sm:hidden" />
              <h2 className="text-lg font-medium">
                OlaMoney Technologies India Pvt Ltd
              </h2>
              <Badge
                variant="outline"
                className="border-blue-500 text-blue-400 bg-slate-100 px-4 py-2"
              >
                Awaiting Vendor Details
              </Badge>
            </div>
            <div className="flex items-center space-x-4 mt-4 sm:mt-0 ml-4">
              <Info className="w-6 h-6" />
              <File className="w-6 h-6" />
              <Webcam className="w-6 h-6" />
              <Download className="w-6 h-6" />
              <Share className="w-6 h-6" />
            </div>
          </div>
          <Tabsprops />
        </main>

        <aside className="hidden w-64 p-4 border-l lg:block">
          <h3 className="text-lg font-medium">Attachments</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 border rounded">
              <p className="text-sm">Vendor Contract</p>
              <Badge>vtech...ve.pdf</Badge>
            </div>
            <div className="flex items-center justify-between p-2 border rounded">
              <p className="text-sm">Vendor Final Proposal</p>
              <Badge>vtech...ve.pdf</Badge>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
