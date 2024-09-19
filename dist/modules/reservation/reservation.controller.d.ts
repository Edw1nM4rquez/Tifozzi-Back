import { ReservationService } from './reservation.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
export declare class ReservationController {
    private readonly reservationService;
    constructor(reservationService: ReservationService);
    create(createReservationDto: CreateReservationDto): Promise<import("./entities/reservation.entity").Reservation>;
    findAll(dateInit?: string, dateEnd?: string, request?: any): Promise<import("./entities/reservation.entity").Reservation[]>;
    getMyReservations(req: any): Promise<import("./entities/reservation.entity").Reservation[]>;
    findOne(id: string): Promise<import("./entities/reservation.entity").Reservation>;
    update(id: string, updateReservationDto: UpdateReservationDto): Promise<[affectedCount: number]>;
    remove(id: string): Promise<number>;
}
