import { useParams } from 'react-router-dom';

function ListingDetail() {
  const { id } = useParams(); // Récupère l'ID du logement à partir de l'URL
  return (
    <div>
      <h2>Détails du logement {id}</h2>
      {/* Contenu des détails du logement */}
    </div>
  );
}

export default ListingDetail;