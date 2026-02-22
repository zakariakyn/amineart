import React from 'react';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
import './ServiceDetail.css';

const serviceData = {
  eclairage: {
    title: 'Éclairage',
    description1: 'Notre service d\'éclairage professionnel transforme chaque espace en un décor féerique. Nous utilisons des équipements de pointe pour créer des ambiances lumineuses adaptées à chaque événement.',
    description2: 'Que ce soit pour un mariage intime ou une grande soirée, notre équipe d\'experts en éclairage saura mettre en valeur chaque détail de votre événement avec grâce et élégance.',
    galleryType: 'carousel',
  },
  structure: {
    title: 'Structure',
    description1: 'Nos structures événementielles sont conçues pour allier esthétique et solidité. Nous proposons une large gamme de structures modulables adaptées à tous vos besoins.',
    description2: 'De la petite tente de réception à la grande structure de gala, notre équipe installe et gère tout avec professionnalisme et attention aux détails.',
    galleryType: 'grid',
  },
  sonorisation: {
    title: 'Sonorisation',
    description1: 'Une sonorisation parfaite est essentielle pour créer l\'atmosphère idéale lors de vos événements. Nous disposons des dernières technologies audio pour garantir un son de qualité.',
    description2: 'Notre équipe de techniciens expérimentés s\'assure que chaque note de musique et chaque mot prononcé soit entendu clairement par tous vos invités.',
    galleryType: 'carousel',
  },
  decoration: {
    title: 'Décoration',
    description1: 'La décoration est l\'âme de tout événement. Notre équipe créative transforme vos espaces en décors féeriques qui reflètent votre personnalité et votre style.',
    description2: 'Avec une attention particulière aux détails et un sens esthétique raffiné, nous créons des décors uniques qui laisseront une impression durable sur vos invités.',
    galleryType: 'carousel',
  }
};

const galleryImages = [
  { src: 'https://placehold.co/600x280/B8963E/FFFFFF?text=Gallery+1', alt: 'Gallery 1' },
  { src: 'https://placehold.co/600x280/9A7A2F/FFFFFF?text=Gallery+2', alt: 'Gallery 2' },
  { src: 'https://placehold.co/600x280/8B7355/FFFFFF?text=Gallery+3', alt: 'Gallery 3' },
  { src: 'https://placehold.co/600x280/6B5335/FFFFFF?text=Gallery+4', alt: 'Gallery 4' },
  { src: 'https://placehold.co/600x280/B8963E/FFFFFF?text=Gallery+5', alt: 'Gallery 5' },
  { src: 'https://placehold.co/600x280/9A7A2F/FFFFFF?text=Gallery+6', alt: 'Gallery 6' },
];

function ServiceDetail({ service }) {
  const data = serviceData[service] || serviceData.eclairage;

  return (
    <div className="service-detail-page">
      <HeroBanner title={data.title} />

      <div className="service-blocks">
        {/* Block 1: image left, text right */}
        <div className="service-block">
          <img
            src={`https://placehold.co/600x300/8B7355/FFFFFF?text=${encodeURIComponent(data.title)}`}
            alt={data.title}
            className="service-block-img"
          />
          <div className="service-block-text">
            <h2>{data.title}</h2>
            <p>{data.description1}</p>
          </div>
        </div>

        {/* Block 2: text left, image right */}
        <div className="service-block reverse">
          <img
            src={`https://placehold.co/600x300/6B5335/FFFFFF?text=${encodeURIComponent(data.title)}+2`}
            alt={data.title}
            className="service-block-img"
          />
          <div className="service-block-text">
            <h2>Notre Approche</h2>
            <p>{data.description2}</p>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="service-gallery">
        <h3>Galerie</h3>
        {data.galleryType === 'grid' ? (
          <div className="service-gallery-grid">
            {galleryImages.map((img, i) => (
              <img key={i} src={img.src} alt={img.alt} />
            ))}
          </div>
        ) : (
          <ImageCarousel slides={galleryImages} type="gallery" />
        )}
      </div>
    </div>
  );
}

export default ServiceDetail;
