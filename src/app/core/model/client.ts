export class Client {
    personnePhysique!: boolean;
    civilite!: string;
    nom!: string;
    prenom!: string;
    raisonSociale!: string;
    cni!: string;
    rc!: string;
    carteImmatriculation!: string;
    numeroPasseport!: string;
    nationalite!: string;
    dateDeNaissance!: string;
    profession!: string;
    email!: string;
    telephone!: string;
    telephonePortable!: string;
    adresse!: string;

   /**  @OneToMany
    private List<Interlocuteur> interlocuteurs;*/
}