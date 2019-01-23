/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a bootstrap card
 */

 const { RichText, MediaUpload, PlainText } = wp.editor;
 const { registerBlockType } = wp.blocks;
 const { Button } = wp.components;

 // Import our CSS files
 import './style.scss';
 import './editor.scss';

 registerBlockType('card-block/main', {
   title: 'Card',
   icon: 'index-card',
   category: 'bootstrap-blocks',
   attributes: {
     title: {
       source: 'text',
       selector: '.card-title'
     },
     body: {
       type: 'array',
       source: 'children',
       selector: '.card-body'
     },
     imageAlt: {
       attribute: 'alt',
       selector: '.card-image-top'
     },
     imageUrl: {
       attribute: 'src',
       selector: '.card-image-top'
     }
   },
   edit({ attributes, className, setAttributes }) {

     const getImageButton = (openEvent) => {
       if(attributes.imageUrl) {
         return (
           <img
             src={ attributes.imageUrl }
             onClick={ openEvent }
             className="card-image-top"
           />
         );
       }
       else {
         return (
           <div className="button-container">
             <Button
               onClick={ openEvent }
               className="button button-large"
             >
               Pick an image
             </Button>
           </div>
         );
       }
     };

     return (
       <div className="card">
         <MediaUpload
           onSelect={ media => { setAttributes({ imageAlt: media.alt, imageUrl: media.url }); } }
           type="image"
           value={ attributes.imageID }
           render={ ({ open }) => getImageButton(open) }
         />
         <PlainText
           onChange={ content => setAttributes({ title: content }) }
           value={ attributes.title }
           placeholder="Your card title"
           className="heading"
         />
         <RichText
           onChange={ content => setAttributes({ body: content }) }
           value={ attributes.body }
           multiline="p"
           placeholder="Your card text"
           formattingControls={ ['bold', 'italic', 'underline'] }
           isSelected={ attributes.isSelected }
         />
       </div>
     );

   },

   save({ attributes }) {

     const cardImage = (src, alt) => {
       if(!src) return null;

       if(alt) {
         return (
           <img
             className="card-image-top"
             src={ src }
             alt={ alt }
           />
         );
       }

       // No alt set, so let's hide it from screen readers
       return (
         <img
           className="card-image-top"
           src={ src }
           alt=""
           aria-hidden="true"
         />
       );
     };

     return (
       <div className="card">
         { cardImage(attributes.imageUrl, attributes.imageAlt) }
         <div className="card-content">
           <h3 className="card-title">{ attributes.title }</h3>
           <div className="card-body">
             { attributes.body }
           </div>
         </div>
       </div>
     );
   }
 });
