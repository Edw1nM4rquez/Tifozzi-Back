import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './entities/reservation.entity';
export declare class ReservationService {
    private readonly reservationRepository;
    constructor(reservationRepository: typeof Reservation);
    create(createReservationDto: CreateReservationDto): Promise<Reservation>;
    findAll(dateInit: string, dateEnd: string): Promise<Reservation[]>;
    findOne(id: number): Promise<Reservation>;
    update(id: number, updateReservationDto: UpdateReservationDto): Promise<[affectedCount: number]>;
    remove(id: number): Promise<number>;
    getMyReservations(userId: number): Promise<Reservation[]>;
}
