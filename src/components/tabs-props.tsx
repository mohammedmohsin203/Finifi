import React from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from './ui/button';
import AlertProps from './alert-props';
import LabelProps from './label-props';


type Props = {}

const Tabsprops = (props: Props) => {
  return (
    <Tabs defaultValue="vendor-form-details" >
    <TabsList className="w-full flex justify-start">
      <TabsTrigger value="vendor-request-details">
        Vendor request details
      </TabsTrigger>
      <TabsTrigger value="vendor-form-details">
        Vendor form details
      </TabsTrigger>
      <TabsTrigger value="add-finance-details">
        Add finance details
      </TabsTrigger>
    </TabsList>
    <TabsContent value="vendor-form-details">
      <div className="flex flex-col space-y-4">
        <h3 className="text-lg font-medium">Send vendor form?</h3>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <Button variant="outline">Yes, send form</Button>
        <AlertProps/>
        </div>
      </div>
    </TabsContent>
    <TabsContent value='add-finance-details'>
        <LabelProps />
    </TabsContent>
  </Tabs>
  )
}

export default Tabsprops