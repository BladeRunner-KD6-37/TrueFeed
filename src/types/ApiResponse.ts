import {Message} from   "@/model/User";
import { MeasureMemoryMode } from "vm";

export interface ApiResponse{
    success: boolean;
    message: string;
    isAcceptingMessages?: boolean;
    messages?: Array<Message>
}