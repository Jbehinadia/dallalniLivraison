import { ICommande } from 'app/entities/commande/commande.model';
import { IPlat } from 'app/entities/plat/plat.model';
import { ILivreur } from '../livreur/livreur.model';
import { IRestaurant } from '../restaurant/restaurant.model';

export interface ICommandeDetails {
  id?: number;
  prix?: number | null;
  etat?: string | null;
  qte?: number | null;
  commande?: ICommande | null;
  plat?: IPlat | null;

  Restau?: IRestaurant; // local
  livreur?: ILivreur; // local
}

export class CommandeDetails implements ICommandeDetails {
  constructor(
    public id?: number,
    public prix?: number | null,
    public etat?: string | null,
    public qte?: number | null,
    public commande?: ICommande | null,
    public plat?: IPlat | null
  ) {}
}

export function getCommandeDetailsIdentifier(commandeDetails: ICommandeDetails): number | undefined {
  return commandeDetails.id;
}
