import React from 'react';
import {
   Button,
   Chip,
   Dialog,
   DialogHeader,
   DialogBody,
   DialogFooter,
   Timeline,
   TimelineItem,
   TimelineConnector,
   TimelineHeader,
   TimelineIcon,
   TimelineBody,
   Typography,
} from '@material-tailwind/react';
import { MdTipsAndUpdates } from 'react-icons/md';

import { title_api, timeline } from '../../configs.js';

const DialComponent = () => {
   const [open, setOpen] = React.useState(false);
   const handlerOpen = () => setOpen(!open);
   return (
      <div className="fixed h-auto w-full z-10">
         <div className="fixed h-auto bottom-2 right-2">
            <Chip onClick={handlerOpen} value="Timeline" icon={<MdTipsAndUpdates size={17} />} className="animate-bounce bg-primary text-base-100 justify-center font-bold p-3 cursor-pointer" />
            <Dialog open={open} handler={handlerOpen} animate={{ mount: { scale: 1, y: 0 }, unmount: { scale: 0.9, y: -100 } }} className="bg-base-100">
               <DialogHeader className="flex justify-center bg-base-200 mx-4 mt-4 rounded-btn">
                  <span className="animate-pulse text-shadow-sm shadow-base-300 highlight highlight-[hsl(var(--p)_/_1)] highlight-spread-y-lg highlight-variant-20 font-luckiest text-base-content tracking-wider">
                     Update {title_api}
                  </span>
               </DialogHeader>
               <DialogBody className="h-[25rem] md:h-[28rem]">
                  <div className="scrollbar-hide min-h-[25rem] w-full h-full overflow-scroll shadow-md bg-base-200 rounded-btn">
                     <Timeline className="p-6">
                        {
                           Object.keys(timeline).map((key, index) => (
                              <TimelineItem key={index} className="text-base-content">
                                 <TimelineConnector />
                                 <TimelineHeader>
                                    <TimelineIcon className="bg-secondary" />
                                    <Typography variant="h5" className="leading-none font-kanit text-secondary">
                                       {key}
                                    </Typography>
                                 </TimelineHeader>
                                 <TimelineBody className="pb-5">
                                    {
                                       timeline[key].map((items, i) => (
                                          <div key={i}>
                                             <Typography variant="small" className="font-normal font-kanit text-base-content">{items}</Typography>
                                          </div>
                                       ))
                                    }
                                 </TimelineBody>
                              </TimelineItem>
                           ))
                        }
                     </Timeline>
                  </div>
               </DialogBody>
               <DialogFooter>
                  <Button onClick={handlerOpen} className="mr-1 transition-all duration-300 ease-linear rounded-btn bg-primary text-base-100 hover:text-base-content hover:bg-base-100 border-2 border-base-200">
                     <span>Close</span>
                  </Button>
               </DialogFooter>
            </Dialog>
         </div>
      </div>
   );
}

export default DialComponent;