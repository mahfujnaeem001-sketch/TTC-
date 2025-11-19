import { Question, PracticalTask } from './types';

export const INITIAL_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "A client sends a project outline describing target audience, color tone, and format. What should the designer interpret first?",
    options: [
      "Output mode",
      "Font library",
      "Image resolution",
      "Design brief"
    ],
    correctAnswerIndex: 3, // d
    category: "Set 1: Design Fundamentals"
  },
  {
    id: 2,
    text: "Tania gathers images from a licensed stock website before editing. Which practice does this demonstrate?",
    options: [
      "Reviewing layers",
      "Selecting color scheme",
      "Identifying image sources",
      "Adjusting brightness"
    ],
    correctAnswerIndex: 2, // c
    category: "Set 1: Design Fundamentals"
  },
  {
    id: 3,
    text: "A freelancer registers on Fiverr and Upwork for graphic work. Which performance standard is this related to?",
    options: [
      "Interpreting fundamentals",
      "Identifying online marketplaces",
      "Reviewing layouts",
      "Creating mockups"
    ],
    correctAnswerIndex: 1, // b
    category: "Set 1: Design Fundamentals"
  },
  {
    id: 4,
    text: "Sina locks the background layer to avoid moving it accidentally. What step is she applying?",
    options: [
      "Pathfinder function",
      "Outline creation",
      "Layer lock",
      "Grouping layers"
    ],
    correctAnswerIndex: 2, // c
    category: "Set 1: Design Fundamentals"
  },
  {
    id: 5,
    text: "Sharla saves her poster in both AI and PDF formats for client review. This fulfills which step?",
    options: [
      "Flattening layers",
      "Font management",
      "File format compatibility",
      "Color calibration"
    ],
    correctAnswerIndex: 2, // c
    category: "Set 1: Design Fundamentals"
  },
  {
    id: 6,
    text: "Lima uses the Pen Tool to cut out a product image from its background. What is this process called?",
    options: [
      "Creating a clipping path",
      "Retouching",
      "Color correction",
      "Masking tool"
    ],
    correctAnswerIndex: 0, // a
    category: "Set 1: Design Fundamentals"
  },
  {
    id: 7,
    text: "After removing blemishes from a photo, Anif uses Tone Sliders to refine it. What is this step known as?",
    options: [
      "Vector tracing",
      "Cropping layout",
      "Retouching image",
      "Applying effects"
    ],
    correctAnswerIndex: 2, // c
    category: "Set 1: Design Fundamentals"
  },
  {
    id: 8,
    text: "Rubel asks a colleague to review his poster and suggest improvements. What is this?",
    options: [
      "Saving output",
      "Evaluating own work",
      "Composing layout",
      "Separating images"
    ],
    correctAnswerIndex: 1, // b
    category: "Set 1: Design Fundamentals"
  },
  {
    id: 9,
    text: "Nabila zooms in to 200% to adjust logo placement precisely. Which setup does this use?",
    options: [
      "Setting view magnification",
      "Adjusting opacity",
      "Using filters",
      "Applying layer lock"
    ],
    correctAnswerIndex: 0, // a
    category: "Set 1: Design Fundamentals"
  },
  {
    id: 10,
    text: "Before printing, Mitu uses the “Print Preview” to check alignment and page margins. Why?",
    options: [
      "To increase brightness",
      "To reduce ink cost",
      "To change paper color",
      "To verify layout accuracy"
    ],
    correctAnswerIndex: 3, // d
    category: "Set 1: Design Fundamentals"
  },
  {
    id: 11,
    text: "Before finalizing the design, Arman double-checks margins, colors, and fonts. Which step is this?",
    options: [
      "Flattening file",
      "Exporting for print",
      "Verifying design work",
      "Adding metadata"
    ],
    correctAnswerIndex: 2, // c
    category: "Set 1: Design Fundamentals"
  },
  {
    id: 12,
    text: "Tarak flattens all layers before exporting a print-ready file. Why?",
    options: [
      "To increase DPI",
      "To re-edit faster",
      "To lock and reduce file size",
      "To save transparency"
    ],
    correctAnswerIndex: 2, // c
    category: "Set 1: Design Fundamentals"
  },
  {
    id: 13,
    text: "Sadia names her final file “Poster_Final_v3.pdf.” What principle does this reflect?",
    options: [
      "Version control",
      "Color proofing",
      "Raster conversion",
      "Outline management"
    ],
    correctAnswerIndex: 0, // a
    category: "Set 1: Design Fundamentals"
  },
  {
    id: 14,
    text: "Before designing, Asha lists all needed tools and palettes. This shows:",
    options: [
      "File compression",
      "Planning and preparation",
      "Design repetition",
      "Output conversion"
    ],
    correctAnswerIndex: 1, // b
    category: "Set 1: Design Fundamentals"
  },
  {
    id: 15,
    text: "Rajib saves both an editable .AI file and a flattened .PDF for output. Why?",
    options: [
      "To allow future edits and ensure print accuracy",
      "To reduce resolution",
      "To hide layers",
      "To merge colors"
    ],
    correctAnswerIndex: 0, // a
    category: "Set 1: Design Fundamentals"
  },
  // --- SET 2 QUESTIONS ---
  {
    id: 16,
    text: "Photoshop has two typing modes: Point type and Paragraph type. Which of the given statements is incorrect?",
    options: [
      "Both modes are the same",
      "Point mode can’t break a line",
      "Paragraph mode is a multiple line",
      "Both modes create a new layer"
    ],
    correctAnswerIndex: 0, // A
    category: "Set 2: Adobe & Principles"
  },
  {
    id: 17,
    text: "Which of the following options is NOT a valid blending mode in Adobe Illustrator?",
    options: [
      "Hard Light",
      "Overlay",
      "Multiply",
      "Dissolve"
    ],
    correctAnswerIndex: 3, // D
    category: "Set 2: Adobe & Principles"
  },
  {
    id: 18,
    text: "__________ is the name of the default Photoshop workspace.",
    options: [
      "Enumeration",
      "Essentials",
      "Establishment",
      "Estrange"
    ],
    correctAnswerIndex: 1, // B
    category: "Set 2: Adobe & Principles"
  },
  {
    id: 19,
    text: "To cut down the size of the entire graphic design, including all layers, you should select the __________ tool.",
    options: [
      "Marquee",
      "Magic wand",
      "Eraser",
      "Crop"
    ],
    correctAnswerIndex: 3, // D
    category: "Set 2: Adobe & Principles"
  },
  {
    id: 20,
    text: "In Adobe Illustrator, which of the following panels allows you to change the options for the blending mode?",
    options: [
      "Layer panel",
      "Transparency panel",
      "Gradient panel",
      "Color panel"
    ],
    correctAnswerIndex: 1, // B
    category: "Set 2: Adobe & Principles"
  },
  {
    id: 21,
    text: "In Adobe Photoshop, which of the following options protects layers from losing quality after resizing or other commands?",
    options: [
      "Lock the style change",
      "Rasterize the layer",
      "Smart object layer",
      "Masked layer"
    ],
    correctAnswerIndex: 2, // C
    category: "Set 2: Adobe & Principles"
  },
  {
    id: 22,
    text: "Working with __________ allows you to create independent pieces of paper that can be edited independently and later added to.",
    options: [
      "Layers",
      "Smart Objects",
      "Slice Tool",
      "Shapes"
    ],
    correctAnswerIndex: 0, // A
    category: "Set 2: Adobe & Principles"
  },
  {
    id: 23,
    text: "Which of the following statements is/are true about creating a clipping mask?",
    options: [
      "You can apply a clipping mask to non-vector objects",
      "The last object in a layer or group masks everything that is in the layer/group",
      "A clipping mask changes into an object with no fill or stroke",
      "All of the above"
    ],
    correctAnswerIndex: 3, // D
    category: "Set 2: Adobe & Principles"
  },
  {
    id: 24,
    text: "Which design principle involves the arrangement of visual elements based on their relationships?",
    options: [
      "Balance",
      "Proximity",
      "Hierarchy",
      "Contrast"
    ],
    correctAnswerIndex: 1, // B
    category: "Set 2: Adobe & Principles"
  },
  {
    id: 25,
    text: "What is the role of contrast in graphic design?",
    options: [
      "To adjust the space between individual letters",
      "To create animations and motion graphics",
      "To create visual interest and emphasize elements",
      "To select appropriate typefaces"
    ],
    correctAnswerIndex: 2, // C
    category: "Set 2: Adobe & Principles"
  },
  {
    id: 26,
    text: "What is the purpose of a mood board in graphic design?",
    options: [
      "To organize and align visual elements",
      "To select appropriate color palettes",
      "To study and analyze user behavior",
      "To collect and present visual inspiration and concepts"
    ],
    correctAnswerIndex: 3, // D
    category: "Set 2: Adobe & Principles"
  },
  {
    id: 27,
    text: "What is the purpose of leading in typography?",
    options: [
      "To adjust the space between individual letters",
      "To create complex animations and interactions",
      "To select appropriate typefaces",
      "To adjust the space between lines of text"
    ],
    correctAnswerIndex: 3, // D
    category: "Set 2: Adobe & Principles"
  },
  {
    id: 28,
    text: "What is the role of a grid system in print design?",
    options: [
      "To organize and align visual elements",
      "To create animations and motion graphics",
      "To edit and manipulate typography",
      "To optimize images for print use"
    ],
    correctAnswerIndex: 0, // A
    category: "Set 2: Adobe & Principles"
  },
  {
    id: 29,
    text: "What is the purpose of mood lighting in photography?",
    options: [
      "To adjust the space between individual letters",
      "To create complex animations and interactions",
      "To manipulate and edit typography",
      "To create a specific atmosphere or mood in a photograph"
    ],
    correctAnswerIndex: 3, // D
    category: "Set 2: Adobe & Principles"
  },
  {
    id: 30,
    text: "Which software is commonly used for page layout and publishing in graphic design?",
    options: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe InDesign",
      "Adobe Premiere Pro"
    ],
    correctAnswerIndex: 2, // C
    category: "Set 2: Adobe & Principles"
  },
  // --- SET 3 QUESTIONS ---
  {
    id: 31,
    text: "Which of the following is a form of PPE?",
    options: [
      "Helmet",
      "First aid kit",
      "Fire extinguisher",
      "Alarm system"
    ],
    correctAnswerIndex: 0, // a
    category: "Set 3: Professional Practice & Tools"
  },
  {
    id: 32,
    text: "What is the primary purpose of workplace interaction?",
    options: [
      "To entertain colleagues",
      "To perform personal tasks",
      "To ensure efficient communication and teamwork",
      "To establish authority"
    ],
    correctAnswerIndex: 2, // c
    category: "Set 3: Professional Practice & Tools"
  },
  {
    id: 33,
    text: "Which of the following file formats is used for compressed files?",
    options: [
      ".zip",
      ".txt",
      ".mp4",
      ".exe"
    ],
    correctAnswerIndex: 0, // a
    category: "Set 3: Professional Practice & Tools"
  },
  {
    id: 34,
    text: "Which office software allows real-time collaboration on documents?",
    options: [
      "Microsoft Word",
      "Google Docs",
      "LibreOffice Writer",
      "WPS Office"
    ],
    correctAnswerIndex: 1, // b
    category: "Set 3: Professional Practice & Tools"
  },
  {
    id: 35,
    text: "Which email component helps filter out unwanted promotional messages?",
    options: [
      "Inbox",
      "Drafts",
      "Spam Folder",
      "Sent Folder"
    ],
    correctAnswerIndex: 2, // c
    category: "Set 3: Professional Practice & Tools"
  },
  {
    id: 36,
    text: "What is the primary purpose of confidentiality in IT?",
    options: [
      "To increase company profits",
      "To protect sensitive information",
      "To reduce company expenses",
      "To promote transparency"
    ],
    correctAnswerIndex: 1, // b
    category: "Set 3: Professional Practice & Tools"
  },
  {
    id: 37,
    text: "Which typeface is best suited for a clean and modern design?",
    options: [
      "Serif",
      "Script",
      "Sans-serif",
      "Decorative"
    ],
    correctAnswerIndex: 2, // c
    category: "Set 3: Professional Practice & Tools"
  },
  {
    id: 38,
    text: "Which tool allows you to manipulate shapes by adding, subtracting, or intersecting them?",
    options: [
      "Shape Builder Tool",
      "Pathfinder",
      "Pen Tool",
      "Slice"
    ],
    correctAnswerIndex: 1, // b
    category: "Set 3: Professional Practice & Tools"
  },
  {
    id: 39,
    text: "What is the default mode for viewing Illustrator files?",
    options: [
      "Preview Mode",
      "Outline Mode",
      "Normal Mode",
      "Pixel Preview"
    ],
    correctAnswerIndex: 2, // c
    category: "Set 3: Professional Practice & Tools"
  },
  {
    id: 40,
    text: "Which layer mode is commonly used to combine two images in a way that the lighter image shows through the darker one?",
    options: [
      "Screen",
      "Overlay",
      "Difference",
      "Multiply"
    ],
    correctAnswerIndex: 0, // a
    category: "Set 3: Professional Practice & Tools"
  },
  {
    id: 41,
    text: "What tool would you use in Photoshop to blend the edges of a separated subject into a new background?",
    options: [
      "Smudge Tool",
      "Healing Brush Tool",
      "Blur Tool",
      "Clone Stamp Tool"
    ],
    correctAnswerIndex: 0, // a
    category: "Set 3: Professional Practice & Tools"
  },
  {
    id: 42,
    text: "Which file format retains transparency and is commonly used for overlaying designs on mockups?",
    options: [
      "JPEG",
      "PNG",
      "PDF",
      "BMP"
    ],
    correctAnswerIndex: 1, // b
    category: "Set 3: Professional Practice & Tools"
  },
  {
    id: 43,
    text: "Which of these is NOT a common use case for mockups?",
    options: [
      "Branding presentation",
      "Digital product showcase",
      "Creating print-ready files",
      "Website UI testing"
    ],
    correctAnswerIndex: 2, // c
    category: "Set 3: Professional Practice & Tools"
  },
  {
    id: 44,
    text: "Why is it important to verify the design against the design brief?",
    options: [
      "To check for software errors",
      "To ensure it meets client expectations and requirements",
      "To reduce file size",
      "To increase print resolution"
    ],
    correctAnswerIndex: 1, // b
    category: "Set 3: Professional Practice & Tools"
  },
  {
    id: 45,
    text: "What does outline text before printing ensure?",
    options: [
      "The text remains editable",
      "The font is preserved even if the printer lacks the font file",
      "The design becomes larger in size",
      "The text becomes blurry"
    ],
    correctAnswerIndex: 1, // b
    category: "Set 3: Professional Practice & Tools"
  },
  // --- SET 4 QUESTIONS ---
  {
    id: 46,
    text: "Which of the following best describes the primary difference between vector and raster graphics?",
    options: [
      "Vector graphics use pixels, raster graphics use mathematical formulas",
      "Raster graphics are scalable without quality loss, vector graphics are not",
      "Vector graphics use mathematical formulas, raster graphics are pixel-based",
      "Raster graphics are resolution independent"
    ],
    correctAnswerIndex: 2, // c
    category: "Set 4: Advanced Design & Ethics"
  },
  {
    id: 47,
    text: "A client insists on using WhatsApp for project updates instead of email. What is the best action?",
    options: [
      "Refuse the client's request",
      "Accept communication channel preferred by client",
      "Only send updates via email",
      "Stop working with the client"
    ],
    correctAnswerIndex: 1, // b
    category: "Set 4: Advanced Design & Ethics"
  },
  {
    id: 48,
    text: "Which of the following formats is best suited for high-quality scalable designs?",
    options: [
      ".jpeg",
      ".png",
      ".ai",
      ".gif"
    ],
    correctAnswerIndex: 2, // c
    category: "Set 4: Advanced Design & Ethics"
  },
  {
    id: 49,
    text: "What does the term netiquette refer to?",
    options: [
      "Speed of the internet connection",
      "Rules for polite and professional behavior online",
      "Security software for internet browsing",
      "technical settings of a web browser"
    ],
    correctAnswerIndex: 1, // b
    category: "Set 4: Advanced Design & Ethics"
  },
  {
    id: 50,
    text: "The Pathfinder tool in Illustrator is primarily used to:",
    options: [
      "Retouch raster images",
      "Combine and manipulate vector shapes",
      "Create pixel-based masks",
      "Adjust kerning and tracking"
    ],
    correctAnswerIndex: 1, // b
    category: "Set 4: Advanced Design & Ethics"
  },
  {
    id: 51,
    text: "Which mark ensures proper alignment of printed sheets during trimming?",
    options: [
      "Watermark",
      "Crop mark",
      "Registration mark",
      "Bleed mark"
    ],
    correctAnswerIndex: 2, // c
    category: "Set 4: Advanced Design & Ethics"
  },
  {
    id: 52,
    text: "The use of layer locking in illustration software prevents:",
    options: [
      "Color calibration errors",
      "Accidental modifications to design elements",
      "File corruption during saving",
      "Font substitution"
    ],
    correctAnswerIndex: 1, // b
    category: "Set 4: Advanced Design & Ethics"
  },
  {
    id: 53,
    text: "Which file format is NOT generally used for professional print design output?",
    options: [
      ".eps",
      ".tiff",
      ".docx",
      ".pdf"
    ],
    correctAnswerIndex: 2, // c
    category: "Set 4: Advanced Design & Ethics"
  },
  {
    id: 54,
    text: "The pen tool is preferred over the magic wand tool for clipping paths because:",
    options: [
      "It requires less manual effort",
      "It produces more precise, controllable paths",
      "It automatically detects edges",
      "It works only on vector images"
    ],
    correctAnswerIndex: 1, // b
    category: "Set 4: Advanced Design & Ethics"
  },
  {
    id: 55,
    text: "Which retouching tool in Photoshop is specifically designed to replicate texture and lighting?",
    options: [
      "Patch Tool",
      "Clone Stamp Tool",
      "Healing Brush Tool",
      "Smudge Tool"
    ],
    correctAnswerIndex: 1, // b
    category: "Set 4: Advanced Design & Ethics"
  },
  {
    id: 56,
    text: "For web design, images should primarily be saved in:",
    options: [
      "CMYK mode",
      "RGB mode",
      "Grayscale mode",
      "Indexed color mode"
    ],
    correctAnswerIndex: 1, // b
    category: "Set 4: Advanced Design & Ethics"
  },
  {
    id: 57,
    text: "Which of the following is NOT a standard color correction method?",
    options: [
      "Curves",
      "Levels",
      "Hue/Saturation",
      "Gaussian Blur"
    ],
    correctAnswerIndex: 3, // d
    category: "Set 4: Advanced Design & Ethics"
  },
  {
    id: 58,
    text: "The main purpose of a mockup is to:",
    options: [
      "Reduce the file size of the final artwork",
      "Provide a realistic representation of the design before final production",
      "Replace the original artwork in the design workflow",
      "Test only the color modes of the design"
    ],
    correctAnswerIndex: 1, // b
    category: "Set 4: Advanced Design & Ethics"
  },
  {
    id: 59,
    text: "In preparing a mockup, which step ensures proper layer management?",
    options: [
      "Using screen layers Mockup",
      "Applying sharpening filters",
      "Flattening the entire image early",
      "Using spot colors"
    ],
    correctAnswerIndex: 0, // a
    category: "Set 4: Advanced Design & Ethics"
  },
  {
    id: 60,
    text: "Which of the following items is LEAST likely to be created as a mockup?",
    options: [
      "Brochure",
      "T-shirt graphic",
      "Antivirus software interface",
      "Poster"
    ],
    correctAnswerIndex: 2, // c
    category: "Set 4: Advanced Design & Ethics"
  },
  {
    id: 61,
    text: "The print preview function allows a designer to:",
    options: [
      "Reinstall printer drivers",
      "Verify layout, margins, and alignment before printing",
      "Convert RGB colors to CMYK",
      "Export directly to PDF"
    ],
    correctAnswerIndex: 1, // b
    category: "Set 4: Advanced Design & Ethics"
  },
  {
    id: 62,
    text: "Which of the following is an example of unethical behavior in the workplace?",
    options: [
      "Meeting project deadlines",
      "Sharing client's confidential data without permission",
      "Using antivirus software regularly",
      "Following company's code of conduct"
    ],
    correctAnswerIndex: 1, // b
    category: "Set 4: Advanced Design & Ethics"
  },
  {
    id: 63,
    text: "Why is bleed important in print design?",
    options: [
      "It prevents pixelation in digital screens",
      "It ensures no unprinted edges appear after trimming",
      "It increases file size for better resolution",
      "It standardizes fonts across devices"
    ],
    correctAnswerIndex: 1, // b
    category: "Set 4: Advanced Design & Ethics"
  },
  {
    id: 64,
    text: "Which color model is industry-standard for offset printing?",
    options: [
      "RGB",
      "CMYK",
      "HSB",
      "Grayscale"
    ],
    correctAnswerIndex: 1, // b
    category: "Set 4: Advanced Design & Ethics"
  },
  {
    id: 65,
    text: "Which of the following would be considered a critical error in final print output preparation?",
    options: [
      "Converting fonts to outlines",
      "Forgetting to embed images",
      "Including crop marks",
      "Exporting in .pdf format"
    ],
    correctAnswerIndex: 1, // b
    category: "Set 4: Advanced Design & Ethics"
  },
  // --- SET 5 QUESTIONS ---
  {
    id: 66,
    text: "Which of the following best describes the primary difference between vector and raster graphics?",
    options: [
      "Vector = pixels; Raster = formulas",
      "Raster = scalable; Vector not",
      "Vector = formulas; Raster = pixels",
      "Raster = resolution-independent"
    ],
    correctAnswerIndex: 2, // c
    category: "Set 5: Advanced Tools & Printing"
  },
  {
    id: 67,
    text: "The Pathfinder tool in Illustrator is primarily used to:",
    options: [
      "Retouch raster images",
      "Combine and edit vectors",
      "Create pixel-based masks",
      "Adjust kerning and tracking"
    ],
    correctAnswerIndex: 1, // b
    category: "Set 5: Advanced Tools & Printing"
  },
  {
    id: 68,
    text: "Which mark ensures proper alignment of printed sheets during trimming?",
    options: [
      "Watermark",
      "Crop marks",
      "Registration mark",
      "Bleed mark"
    ],
    correctAnswerIndex: 2, // c
    category: "Set 5: Advanced Tools & Printing"
  },
  {
    id: 69,
    text: "Which file format is NOT generally used for professional print design output?",
    options: [
      ".eps",
      ".tiff",
      ".docx",
      ".pdf"
    ],
    correctAnswerIndex: 2, // c
    category: "Set 5: Advanced Tools & Printing"
  },
  {
    id: 70,
    text: "For web design, images should primarily be saved in:",
    options: [
      "CMYK mode",
      "RGB mode",
      "Grayscale mode",
      "Indexed color mode"
    ],
    correctAnswerIndex: 1, // b
    category: "Set 5: Advanced Tools & Printing"
  },
  {
    id: 71,
    text: "Which retouching tool in Photoshop is specifically designed to replicate texture and lighting?",
    options: [
      "Patch Tool",
      "Clone Stamp Tool",
      "Healing Brush Tool",
      "Smudge Tool"
    ],
    correctAnswerIndex: 1, // b
    category: "Set 5: Advanced Tools & Printing"
  },
  {
    id: 72,
    text: "Why is bleed important in print design?",
    options: [
      "It prevents pixelation in digital screens",
      "Ensures no white edges after trimming",
      "It increases file size for better resolution",
      "It standardizes fonts across devices"
    ],
    correctAnswerIndex: 1, // b
    category: "Set 5: Advanced Tools & Printing"
  },
  {
    id: 73,
    text: "Which color model is industry-standard for offset printing?",
    options: [
      "RGB",
      "CMYK",
      "HSB",
      "Grayscale"
    ],
    correctAnswerIndex: 1, // b
    category: "Set 5: Advanced Tools & Printing"
  },
  {
    id: 74,
    text: "Which principle helps to create focus and guide viewer attention?",
    options: [
      "Balance",
      "Hierarchy",
      "Repetition",
      "Proximity"
    ],
    correctAnswerIndex: 1, // b
    category: "Set 5: Advanced Tools & Printing"
  },
  {
    id: 75,
    text: "In Photoshop, non-destructive editing is achieved by:",
    options: [
      "Use non-destructive editing methods (e.g., Smart Objects, adjustment layers)",
      "Apply filters on original layer",
      "Delete background permanently",
      "Save only as JPEG"
    ],
    correctAnswerIndex: 0, // a
    category: "Set 5: Advanced Tools & Printing"
  },
  {
    id: 76,
    text: "Which Illustrator tool allows you to blend two shapes smoothly?",
    options: [
      "Pathfinder",
      "Shape Builder",
      "Blend Tool",
      "Gradient Mesh Tool"
    ],
    correctAnswerIndex: 2, // c
    category: "Set 5: Advanced Tools & Printing"
  },
  {
    id: 77,
    text: "Which of the following file formats supports transparency?",
    options: [
      "JPEG",
      "PNG",
      "BMP",
      "PDF"
    ],
    correctAnswerIndex: 1, // b
    category: "Set 5: Advanced Tools & Printing"
  },
  {
    id: 78,
    text: "What is the function of a 'Displacement Map' in mockups?",
    options: [
      "Applies design to surface (by displacing pixels for a realistic wrap)",
      "Adds color gradients",
      "Increases DPI",
      "Reduces file size"
    ],
    correctAnswerIndex: 0, // a
    category: "Set 5: Advanced Tools & Printing"
  },
  {
    id: 79,
    text: "What happens when you outline text before printing?",
    options: [
      "Text stays editable",
      "Font stays intact",
      "Text looks blurry",
      "File gets larger"
    ],
    correctAnswerIndex: 1, // b
    category: "Set 5: Advanced Tools & Printing"
  },
  {
    id: 80,
    text: "Before sending to print, switching RGB to CMYK ensures:",
    options: [
      "Accurate print colors",
      "Smaller file size",
      "Screen brightness",
      "Transparent background"
    ],
    correctAnswerIndex: 0, // a
    category: "Set 5: Advanced Tools & Printing"
  },
  // --- SET 6 QUESTIONS ---
  {
    id: 81,
    text: "A designer makes certain elements larger and bolder than others to create visual interest. Which principle does this illustrate?",
    options: [
      "Emphasis",
      "Balance",
      "Rhythm",
      "White Space"
    ],
    correctAnswerIndex: 0, // Emphasis
    category: "Set 6: Design Principles & Vector Tools"
  },
  {
    id: 82,
    text: "A poster uses the same font and color scheme throughout. Which principle ensures the design feels cohesive?",
    options: [
      "Unity",
      "Contrast",
      "Movement",
      "Distortion"
    ],
    correctAnswerIndex: 0, // Unity
    category: "Set 6: Design Principles & Vector Tools"
  },
  {
    id: 83,
    text: "You align multiple images along the same invisible axis to create a clean layout. Which principle is being used?",
    options: [
      "Alignment",
      "Repetition",
      "Randomness",
      "Texture"
    ],
    correctAnswerIndex: 0, // Alignment
    category: "Set 6: Design Principles & Vector Tools"
  },
  {
    id: 84,
    text: "A layout has one main focal point but multiple supporting elements. Which principle is applied?",
    options: [
      "Emphasis",
      "Pattern",
      "Bleed",
      "Opacity"
    ],
    correctAnswerIndex: 0, // Emphasis
    category: "Set 6: Design Principles & Vector Tools"
  },
  {
    id: 85,
    text: "Shapes of different sizes are scattered but they appear connected because they share the same color. Which principle is applied?",
    options: [
      "Unity/Harmony",
      "Isolation",
      "Conflict",
      "Asymmetry"
    ],
    correctAnswerIndex: 0, // Unity or Harmony
    category: "Set 6: Design Principles & Vector Tools"
  },
  {
    id: 86,
    text: "You want to duplicate and align multiple objects precisely. Which tool feature is helpful?",
    options: [
      "Align and Distribute panel",
      "Magic Wand",
      "Gradient Tool",
      "Eraser"
    ],
    correctAnswerIndex: 0, // Align and Distribute
    category: "Set 6: Design Principles & Vector Tools"
  },
  {
    id: 87,
    text: "A designer wants to create a complex shape by combining two or more shapes. Which tool should they use?",
    options: [
      "Pathfinder / Shape Modes",
      "Layers panel",
      "Swatches",
      "Artboards"
    ],
    correctAnswerIndex: 0, // Pathfinder
    category: "Set 6: Design Principles & Vector Tools"
  },
  {
    id: 88,
    text: "You need to adjust the stroke thickness along a path. Which tool is used?",
    options: [
      "Width Tool",
      "Type Tool",
      "Hand Tool",
      "Zoom Tool"
    ],
    correctAnswerIndex: 0, // Width Tool
    category: "Set 6: Design Principles & Vector Tools"
  },
  {
    id: 89,
    text: "You want to draw freehand vector lines that look natural. Which Illustrator tool is suitable?",
    options: [
      "Pencil Tool",
      "Rectangle Tool",
      "Grid Tool",
      "Slice Tool"
    ],
    correctAnswerIndex: 0, // Pencil Tool
    category: "Set 6: Design Principles & Vector Tools"
  },
  {
    id: 90,
    text: "A designer wants to trace a hand-drawn sketch into vector paths. Which Illustrator feature is used?",
    options: [
      "Image Trace",
      "Rasterize",
      "Pixelate",
      "Blur"
    ],
    correctAnswerIndex: 0, // Image Trace
    category: "Set 6: Design Principles & Vector Tools"
  },
  {
    id: 91,
    text: "You want to combine multiple images into a single composition. Which Photoshop feature should be used?",
    options: [
      "Layer Merge",
      "Crop Tool",
      "Slice Tool",
      "Spot Healing Brush"
    ],
    correctAnswerIndex: 0, // a
    category: "Set 6: Design Principles & Vector Tools"
  },
  {
    id: 92,
    text: "You need to remove the background of a product image for an e-commerce website. Which Photoshop method is quick and effective?",
    options: [
      "Gradient Tool",
      "Pen Tool / Quick Selection",
      "Blur Filter",
      "Eye Dropper Tool"
    ],
    correctAnswerIndex: 1, // b
    category: "Set 6: Design Principles & Vector Tools"
  },
  {
    id: 93,
    text: "A designer wants to make a person appear in front of a new background. Which workflow is recommended?",
    options: [
      "Flatten Image immediately",
      "Use layer masking",
      "Use the Eraser Tool permanently",
      "Save as JPEG and reopen"
    ],
    correctAnswerIndex: 1, // b
    category: "Set 6: Design Principles & Vector Tools"
  },
  {
    id: 94,
    text: "You want to create a precise selection around a geometric object. Which Photoshop tool is most suitable?",
    options: [
      "Magic Wand",
      "Brush Tool",
      "Polygonal Lasso Tool",
      "Clone Stamp"
    ],
    correctAnswerIndex: 2, // c
    category: "Set 6: Design Principles & Vector Tools"
  },
  {
    id: 95,
    text: "A designer wants to keep their original image unchanged while experimenting with multiple compositions. Which Photoshop feature ensures non-destructive editing?",
    options: [
      "Rasterize Layer",
      "Merge Visible",
      "Convert to Smart Object",
      "Flatten Image"
    ],
    correctAnswerIndex: 2, // c
    category: "Set 6: Design Principles & Vector Tools"
  },
  // --- SET 7 QUESTIONS ---
  {
    id: 96,
    text: "What are the key components of a workplace first-aid kit?",
    options: [
      "Snacks, energy drinks, and coffee",
      "Antiseptic wipes, bandages, gauze, gloves, scissors",
      "Laptops, chargers, and internet cables",
      "Paintbrushes, sketchpads, and pencils"
    ],
    correctAnswerIndex: 1,
    category: "Set 7: Workplace & Technical"
  },
  {
    id: 97,
    text: "How does active listening contribute to better teamwork?",
    options: [
      "It builds trust, reduces misunderstandings, and ensures members feel heard",
      "It allows one person to dominate the conversation",
      "It increases the speed of typing documents",
      "It removes the need for written communication"
    ],
    correctAnswerIndex: 0,
    category: "Set 7: Workplace & Technical"
  },
  {
    id: 98,
    text: "What is the purpose of an operating system?",
    options: [
      "To physically cool down the computer processor",
      "To browse the internet exclusively",
      "To manage hardware/software resources and provide a user interface",
      "To edit vector graphics"
    ],
    correctAnswerIndex: 2,
    category: "Set 7: Workplace & Technical"
  },
  {
    id: 99,
    text: "Which shortcut is used to repeat the last action in MS Office?",
    options: [
      "Ctrl + Z",
      "Alt + F4",
      "Ctrl + S",
      "F4 or Ctrl + Y"
    ],
    correctAnswerIndex: 3,
    category: "Set 7: Workplace & Technical"
  },
  {
    id: 100,
    text: "What is the function of a web browser?",
    options: [
      "To access and display websites on the World Wide Web",
      "To create offline spreadsheets",
      "To compile C++ code",
      "To manage the computer's boot sequence"
    ],
    correctAnswerIndex: 0,
    category: "Set 7: Workplace & Technical"
  },
  {
    id: 101,
    text: "What happens if client data is misused in IT?",
    options: [
      "The computer runs faster",
      "Legal penalties, loss of trust, and reputational damage",
      "Software updates are installed automatically",
      "Network bandwidth increases"
    ],
    correctAnswerIndex: 1,
    category: "Set 7: Workplace & Technical"
  },
  {
    id: 102,
    text: "What role does typography play in graphic design?",
    options: [
      "It reduces file size of images",
      "It automatically color corrects photos",
      "It ensures readability, establishes hierarchy, and sets tone",
      "It converts raster images to vectors"
    ],
    correctAnswerIndex: 2,
    category: "Set 7: Workplace & Technical"
  },
  {
    id: 103,
    text: "How does the Pen Tool work in Illustrator?",
    options: [
      "It paints pixels like a traditional brush",
      "Creates precise vector paths using anchor points",
      "It automatically removes backgrounds from photos",
      "It types text into the document"
    ],
    correctAnswerIndex: 1,
    category: "Set 7: Workplace & Technical"
  },
  {
    id: 104,
    text: "What is the role of layers in Illustrator?",
    options: [
      "Merging colors to create gradients",
      "Compressing files for email",
      "Checking spelling grammar",
      "Organizing artwork and allowing independent editing"
    ],
    correctAnswerIndex: 3,
    category: "Set 7: Workplace & Technical"
  },
  {
    id: 105,
    text: "What is the difference between 'Layer Merging' and 'Layer Flattening'?",
    options: [
      "Merging combines selected layers; Flattening combines all visible layers",
      "Merging deletes layers; Flattening duplicates them",
      "Merging is for text; Flattening is for shapes",
      "There is no difference; they are synonyms"
    ],
    correctAnswerIndex: 0,
    category: "Set 7: Workplace & Technical"
  },
  {
    id: 106,
    text: "Why is it essential to check the resolution of images before composing them together?",
    options: [
      "To change the file name automatically",
      "To ensure consistent quality and prevent blurriness",
      "To convert them to black and white",
      "To ensure they fit on a floppy disk"
    ],
    correctAnswerIndex: 1,
    category: "Set 7: Workplace & Technical"
  },
  {
    id: 107,
    text: "Why should a designer use a color profile in print design?",
    options: [
      "To make colors brighter than reality",
      "To remove all blue tones from the image",
      "To translate colors consistently between monitor and printer",
      "To increase the number of pixels in the image"
    ],
    correctAnswerIndex: 2,
    category: "Set 7: Workplace & Technical"
  },
  {
    id: 108,
    text: "What is the function of a displacement map in mockups?",
    options: [
      "To find the location of the printing press",
      "Realistically wrap/distort design onto a surface texture",
      "To remove the background of the logo",
      "To change the font style of the text"
    ],
    correctAnswerIndex: 1,
    category: "Set 7: Workplace & Technical"
  },
  {
    id: 109,
    text: "Why is CMYK preferred over RGB for print design?",
    options: [
      "CMYK is ink-based (subtractive), matching printer capabilities",
      "CMYK has a wider color gamut than RGB",
      "RGB files are too small for print",
      "Printers cannot read digital files"
    ],
    correctAnswerIndex: 0,
    category: "Set 7: Workplace & Technical"
  },
  {
    id: 110,
    text: "What should be checked before sending a design file to the printer?",
    options: [
      "Monitor brightness and mouse sensitivity",
      "Bleed, CMYK mode, resolution, and fonts",
      "Internet connection speed",
      "The date of software installation"
    ],
    correctAnswerIndex: 1,
    category: "Set 7: Workplace & Technical"
  },
  // --- SET 8 QUESTIONS ---
  {
    id: 111,
    text: "Which statement best distinguishes PPI from DPI?",
    options: [
      "PPI is for print (300+), DPI is for screens (72)",
      "PPI (Pixels Per Inch) is for screens; DPI (Dots Per Inch) is for print",
      "They are identical terms used interchangeably",
      "DPI controls color mode, PPI controls file size"
    ],
    correctAnswerIndex: 1, // b
    category: "Set 8: Scenarios & Troubleshooting"
  },
  {
    id: 112,
    text: "A client feels a poster is 'too heavy on one side'. Which principle needs adjustment?",
    options: [
      "Contrast",
      "Rhythm",
      "Balance",
      "Repetition"
    ],
    correctAnswerIndex: 2, // c
    category: "Set 8: Scenarios & Troubleshooting"
  },
  {
    id: 113,
    text: "What is the specific purpose of Registration Marks in printing?",
    options: [
      "To indicate where to cut the paper",
      "To align color plates (CMYK) accurately",
      "To prevent ink bleeding",
      "To mark the center of the page"
    ],
    correctAnswerIndex: 1, // b
    category: "Set 8: Scenarios & Troubleshooting"
  },
  {
    id: 114,
    text: "Why might a design look vibrant on screen but dull when printed?",
    options: [
      "The monitor brightness is too low",
      "Printers use RGB which is duller",
      "CMYK (ink) has a smaller color gamut than RGB (light)",
      "The paper absorbs too much light"
    ],
    correctAnswerIndex: 2, // c
    category: "Set 8: Scenarios & Troubleshooting"
  },
  {
    id: 115,
    text: "If a printed flyer has unwanted white borders after trimming, what was missing?",
    options: [
      "Registration marks",
      "Bleed settings",
      "High resolution",
      "CMYK mode"
    ],
    correctAnswerIndex: 1, // b
    category: "Set 8: Scenarios & Troubleshooting"
  },
  {
    id: 116,
    text: "How can you prevent font substitution issues when sending files to a printer?",
    options: [
      "Send the font file separately",
      "Convert text to outlines/shapes",
      "Rasterize the entire document",
      "Use only Arial font"
    ],
    correctAnswerIndex: 1, // b
    category: "Set 8: Scenarios & Troubleshooting"
  },
  {
    id: 117,
    text: "A client cannot visualize how a 2D logo looks on a box. What helps best?",
    options: [
      "A detailed written description",
      "A realistic 3D Mockup",
      "Sending the raw vector file",
      "Trusting the designer's word"
    ],
    correctAnswerIndex: 1, // b
    category: "Set 8: Scenarios & Troubleshooting"
  },
  {
    id: 118,
    text: "Which is a primary professional use of email in a design workflow?",
    options: [
      "Instant chat for quick edits",
      "Sending large raw video files directly",
      "Formal delivery of contracts and project updates",
      "Social networking"
    ],
    correctAnswerIndex: 2, // c
    category: "Set 8: Scenarios & Troubleshooting"
  },
  {
    id: 119,
    text: "Which combination of tools is best for fixing a dark product photo with wrong colors?",
    options: [
      "Crop, Resize, and Eraser",
      "Levels, Curves, and Hue/Saturation",
      "Blur, Sharpen, and Smudge",
      "Pen Tool and Pathfinder"
    ],
    correctAnswerIndex: 1, // b
    category: "Set 8: Scenarios & Troubleshooting"
  }
];

// --- PRACTICAL TASKS (PQ) ---
// Recreated to look exactly like the scanned job sheets using HTML Table structures

export const PRACTICAL_TASKS: PracticalTask[] = [
  {
    id: 'job-01',
    title: "Job 01: Sales Report",
    description: "Prepare and present sales report as per specification using office application software",
    timeLimitMinutes: 60,
    content: `
      <div class="font-serif text-black">
        <h2 class="text-center font-bold text-lg mb-4 uppercase">Job Sheet – 1 for Graphic Design, Level – 3</h2>
        
        <!-- Header Table -->
        <table class="w-full border-collapse border border-black mb-6 text-sm">
           <tbody>
             <tr>
               <td class="border border-black p-2 bg-gray-100 font-bold w-1/4">Candidate Name:</td>
               <td class="border border-black p-2 font-handwriting text-xl text-blue-900">MD. ANWAR HOSSAIN</td>
             </tr>
             <tr>
               <td class="border border-black p-2 bg-gray-100 font-bold">Job 01:</td>
               <td class="border border-black p-2">Prepare and present sales report as per specification using office application software</td>
             </tr>
             <tr>
               <td class="border border-black p-2 bg-gray-100 font-bold">Time:</td>
               <td class="border border-black p-2">1:00 Hour</td>
             </tr>
             <tr>
               <td class="border border-black p-2 bg-gray-100 font-bold align-top">Unit Covered:</td>
               <td class="border border-black p-2 text-xs">
                 GU-02-L1-V1: Apply Occupational Safety and Health (OSH) Procedure in the Workplace<br/>
                 GU-02-L2-V1: Carry Out Workplace Interaction<br/>
                 SU-ICT-06-L2-V1: Operate a Personal Computer and Use Application Programs<br/>
                 SU-ICT-07-L2-V1: Operate Office Application Software<br/>
                 SU-ICT-08-L3-V1: Access Information using Internet and Electronic Mail<br/>
                 SU-ICT-04-L3-V1: Comply to Ethical Standards in IT Workplace
               </td>
             </tr>
             <tr>
               <td class="border border-black p-2 bg-gray-100 font-bold">Task A:</td>
               <td class="border border-black p-2">Prepare a sales report as per specification using spread sheet and word processor software.</td>
             </tr>
           </tbody>
        </table>

        <!-- Instructions -->
        <div class="border border-black p-0 mb-6 text-sm">
           <div class="bg-gray-100 font-bold p-2 border-b border-black">Instructions:</div>
           <div class="p-4">
             <p class="mb-2 font-bold">Read and understand the directions carefully:</p>
             <ul class="list-disc pl-6 space-y-1">
               <li>this practical demonstration is based on the performance criteria from all or some of the units of competency in graphic design, Level – 3</li>
               <li>this assessment activity will be used to measure your underpinning skills</li>
               <li>you will have fifteen (15) minutes to familiarise yourself with the resources to be used</li>
             </ul>
           </div>
        </div>

        <!-- Working Procedure -->
        <div class="border border-black p-0 mb-6 text-sm">
           <div class="bg-gray-100 font-bold p-2 border-b border-black">Working Procedure/ Steps:</div>
           <div class="p-4">
             <ol class="list-decimal pl-6 space-y-1">
               <li>Observe and wear personal protective equipment (PPE) as required for the Job.</li>
               <li>Observe and follow Occupational Health and Safety (OHS) requirements during the demonstration processes.</li>
               <li>Read the provided Job and Specification sheet.</li>
               <li>Collect required tools, materials, and equipment for the job.</li>
               <li>Prepare PC to perform job smoothly.</li>
               <li>Create a folder in “D Drive” namely “Reg no_Your Name”.</li>
               <li>Create and Save the file with named “Job-01_ Spreadsheet” to the newly created folder.</li>
               <li>Perform the job within the given time as per sample and specification sheet.</li>
               <li>Complete all calculation as per requirement given in the Specification Sheet.</li>
               <li>Perform cell formatting as per sample and specification sheet.</li>
               <li>Perform insertion of chart as per sample and specification sheet.</li>
               <li>Check and review after completion of the task.</li>
               <li>Save the document with both .xlsx and .csv extension</li>
               <li>Open a word processing software</li>
               <li>Create and Save the word document file with named “Job-01_ Word Processing” to the newly created folder.</li>
               <li>Perform the Job within the given time as per Sample and specification sheet.</li>
               <li>Place the content created in the spread sheet in such a way that when it changes in spread sheet, it also changes in Word document.</li>
               <li>Show your final output to the Competency Assessor.</li>
               <li>Print the final output of word document and submit a hard copy to your assessor as evidence.</li>
               <li>Shutdown computer and clean your workplace.</li>
               <li>Clean tools, equipment, materials, and work area.</li>
             </ol>
           </div>
        </div>

        <div class="break-before-page"></div>

        <h2 class="text-center font-bold text-lg mb-4 uppercase mt-8">Specification Sheet – Task 1: for Graphic Design, Level – 3</h2>
        
        <div class="border border-black p-4 mb-6 text-sm">
           <h3 class="font-bold underline mb-2">FOR SPREAD SHEET:</h3>
           <p><strong>Font:</strong> Arial</p>
           <p><strong>Title font Size:</strong> 14 (Sales Data Analysis)</p>
           <p><strong>Field elements:</strong> Font: 12pt</p>
           <p><strong>Field elements:</strong> Product, Quantity Sold, Unit Price and Total Sales</p>
           
           <p class="font-bold mt-2">Cell Formatting:</p>
           <ul class="list-disc pl-6 mb-2">
             <li>Apply borders to the table for better readability.</li>
             <li>Format the field element row to make it bold and centre-aligned (Middle-centre). Row height should be 25.</li>
             <li>Format the cells containing currency values (Unit Price and Total Sales) to display as currency.</li>
             <li>Apply cell formatting only for “Total Sales” field, to highlight the cells contains less than TK. 20,000.</li>
           </ul>

           <p class="font-bold mt-2">Calculation:</p>
           <p class="mb-2">Use appropriate (correct) formula to calculate “Total Sales”, “Total Quantity Sold:” and “Total Sales Amount:”</p>

           <p class="font-bold mt-2">Insertion of Bar Chart:</p>
           <p>Insert the suitable bar chart (e.g., Clustered Bar) below the table to ensure it accurately show only the “Product” and “Total Sales” in the table.</p>
        </div>

        <div class="border border-black p-0 mb-6 text-sm">
            <div class="bg-gray-100 font-bold p-2 border-b border-black text-center underline">FOR WORD DOCUMENT</div>
            <table class="w-full border-collapse">
               <tr>
                  <td class="border-r border-black p-4 w-1/2 align-top">
                    <p class="font-bold underline mb-2">Page Layout</p>
                    <p><strong>Page size:</strong> 8.3 in x 8.25 in</p>
                    <p><strong>Margins:</strong> Normal</p>
                    <p><strong>Page orientation:</strong> Portrait</p>
                  </td>
                  <td class="p-4 w-1/2 align-top">
                    <p class="font-bold underline mb-2">Header Logo image</p>
                    <p><strong>Size:</strong> 0.75 in x 1 in</p>
                    <p><strong>Position:</strong> As per sample</p>
                  </td>
               </tr>
               <tr class="border-t border-black">
                  <td class="border-r border-black p-4 align-top">
                     <p class="font-bold underline mb-2">Text: Header Text</p>
                     <p><strong>Font:</strong> Arial</p>
                     <p><strong>Organization Name font size:</strong> 20pt</p>
                     <p><strong>Address font size:</strong> 14pt</p>
                     <p><strong>Alignment:</strong> Center</p>
                  </td>
                  <td class="p-4 align-top">
                     <p class="font-bold underline mb-2">Text: Body Text</p>
                     <p><strong>Font:</strong> Arial</p>
                     <p><strong>Title (Monthly Report) font size:</strong> 14pt</p>
                     <p><strong>Style:</strong> Underlined</p>
                     <p><strong>Other font size:</strong> 11pt</p>
                  </td>
               </tr>
            </table>
        </div>

         <div class="break-before-page"></div>
         <h3 class="font-bold text-center mt-8 mb-4">(Worksheet Sample)</h3>
         <table class="w-full border-collapse border border-gray-400 text-xs font-mono mb-8">
            <thead>
                <tr class="bg-gray-100">
                    <th class="border border-gray-400 p-1 w-8 text-center"></th>
                    <th class="border border-gray-400 p-1 w-8 text-center">A</th>
                    <th class="border border-gray-400 p-1 w-8 text-center">B</th>
                    <th class="border border-gray-400 p-1 w-8 text-center">C</th>
                    <th class="border border-gray-400 p-1 w-8 text-center">D</th>
                </tr>
            </thead>
            <tbody>
                <tr><td class="border border-gray-400 p-1 text-center bg-gray-50">1</td><td class="border border-gray-400 p-1 font-bold" colspan="4">Sales Data Analysis</td></tr>
                <tr><td class="border border-gray-400 p-1 text-center bg-gray-50">2</td><td class="border border-gray-400 p-1"></td><td class="border border-gray-400 p-1"></td><td class="border border-gray-400 p-1"></td><td class="border border-gray-400 p-1"></td></tr>
                <tr><td class="border border-gray-400 p-1 text-center bg-gray-50">3</td><td class="border border-gray-400 p-1 font-bold text-center">Product</td><td class="border border-gray-400 p-1 font-bold text-center">Quantity Sold</td><td class="border border-gray-400 p-1 font-bold text-center">Unit Price</td><td class="border border-gray-400 p-1 font-bold text-center">Total Sales</td></tr>
                <tr><td class="border border-gray-400 p-1 text-center bg-gray-50">4</td><td class="border border-gray-400 p-1">Keyboard</td><td class="border border-gray-400 p-1 text-right">60</td><td class="border border-gray-400 p-1 text-right">450</td><td class="border border-gray-400 p-1 text-right">27000</td></tr>
                <tr><td class="border border-gray-400 p-1 text-center bg-gray-50">5</td><td class="border border-gray-400 p-1">Mouse</td><td class="border border-gray-400 p-1 text-right">40</td><td class="border border-gray-400 p-1 text-right">400</td><td class="border border-gray-400 p-1 text-right">16000</td></tr>
                 <tr><td class="border border-gray-400 p-1 text-center bg-gray-50">6</td><td class="border border-gray-400 p-1">Speakers</td><td class="border border-gray-400 p-1 text-right">35</td><td class="border border-gray-400 p-1 text-right">800</td><td class="border border-gray-400 p-1 text-right">28000</td></tr>
                  <tr><td class="border border-gray-400 p-1 text-center bg-gray-50">7</td><td class="border border-gray-400 p-1">USB drive</td><td class="border border-gray-400 p-1 text-right">40</td><td class="border border-gray-400 p-1 text-right">550</td><td class="border border-gray-400 p-1 text-right">22000</td></tr>
                   <tr><td class="border border-gray-400 p-1 text-center bg-gray-50">8</td><td class="border border-gray-400 p-1">Microphone</td><td class="border border-gray-400 p-1 text-right">45</td><td class="border border-gray-400 p-1 text-right">600</td><td class="border border-gray-400 p-1 text-right">27000</td></tr>
                   <tr><td class="border border-gray-400 p-1 text-center bg-gray-50">9</td><td class="border border-gray-400 p-1 font-bold">Total Quantity Sold:</td><td class="border border-gray-400 p-1 font-bold text-right">220</td><td class="border border-gray-400 p-1"></td><td class="border border-gray-400 p-1"></td></tr>
                   <tr><td class="border border-gray-400 p-1 text-center bg-gray-50">10</td><td class="border border-gray-400 p-1 font-bold">Total Sales Amount:</td><td class="border border-gray-400 p-1 font-bold text-right">120000</td><td class="border border-gray-400 p-1"></td><td class="border border-gray-400 p-1"></td></tr>
            </tbody>
         </table>

      </div>
    `
  },
  {
    id: 'job-02',
    title: "Job 02: Vector Logo & Business Card",
    description: "Create a Vector Logo & Business Card using Illustration Software",
    timeLimitMinutes: 90,
    content: `
      <div class="font-serif text-black">
        <h2 class="text-center font-bold text-lg mb-4 uppercase">Job Sheet-2 for Graphic Design, Level – 3</h2>

        <!-- Header Table -->
        <table class="w-full border-collapse border border-black mb-6 text-sm">
           <tbody>
             <tr>
               <td class="border border-black p-2 bg-gray-100 font-bold w-1/4">Candidate Name:</td>
               <td class="border border-black p-2 w-3/4"></td>
             </tr>
             <tr>
               <td class="border border-black p-2 bg-gray-100 font-bold">Job 02:</td>
               <td class="border border-black p-2">Create a Vector Logo & Business Card</td>
             </tr>
             <tr>
               <td class="border border-black p-2 bg-gray-100 font-bold">Time:</td>
               <td class="border border-black p-2">1:30 Hours</td>
             </tr>
             <tr>
               <td class="border border-black p-2 bg-gray-100 font-bold align-top">Unit Covered:</td>
               <td class="border border-black p-2 text-xs">
                 1. OU-ICT-GD-01-L3-VI: Apply Graphic Design Concept and Guidelines.<br/>
                 2. OU-ICT-GD-02-13-VI: Create Professional Designs using Illustration Software.<br/>
                 3. OU-ICT-3. GD-05-L3-V1 Develop Materials for Output.
               </td>
             </tr>
           </tbody>
        </table>

        <!-- Instructions -->
        <div class="border border-black p-0 mb-6 text-sm">
           <div class="bg-gray-100 font-bold p-2 border-b border-black">Instructions:</div>
           <div class="p-4">
             <p class="mb-2 font-bold">Read and understand the directions carefully:</p>
             <ul class="list-disc pl-6 space-y-1">
               <li>this practical demonstration is based on the performance criteria from all or some of the units of competency Graphic Design, Level - 3</li>
               <li>this assessment activity will be used to measure your underpinning skills</li>
               <li>you must require vector-based graphic design software to perform this job.</li>
               <li>you will have fifteen (15) minutes to familiarise yourself with the resources to be used</li>
             </ul>
           </div>
        </div>

        <!-- Working Procedure -->
        <div class="border border-black p-0 mb-6 text-sm">
           <div class="bg-gray-100 font-bold p-2 border-b border-black">Working Procedure/Steps:</div>
           <div class="p-4">
             <ol class="list-decimal pl-6 space-y-1">
               <li>Observe and wear personal protective equipment (PPE) as required for the Job.</li>
               <li>Observe and follow Occupational Health and Safety (OHS) requirements during the demonstration processes.</li>
               <li>Read the provided Job and Specification sheet.</li>
               <li>Collect required tools, materials, and equipment for the job.</li>
               <li>Prepare PC to perform job smoothly.</li>
               <li>Collect the resources from your assessor as per the job requirement.</li>
               <li>Open vector-based graphic design software and create a new document and set up the workplace.</li>
               <li>Save the file with named "Job-02" to the newly created folder.</li>
               <li>Create vector design as per the job specification sheet.</li>
               <li>Apply color scheme as per the job specification sheet.</li>
               <li>Apply effects as per specification.</li>
               <li>Save the document using the default file format of your vector-based graphic design software.</li>
               <li>Export and save a copy of your file formats as per the job specification sheet.</li>
               <li>Check your design file and hand over to your assessor.</li>
               <li>Submit final output to the Competency Assessor.</li>
               <li>Shutdown computer and clean your workplace.</li>
               <li>Clean tools, equipment, materials, and work area.</li>
             </ol>
           </div>
        </div>

        <div class="break-before-page"></div>
        <h2 class="text-center font-bold text-lg mb-4 mt-8">Specification Sheet - 2 for Graphic Design, Level-3</h2>
        <div class="border border-black p-4 mb-6 text-sm">
            <p class="mb-2"><strong>Condition For the Job:</strong> Work must be carried out in a safe manner and according to Graphic Design (Level 1) standards.</p>
            
            <p class="mb-2 font-bold underline">Client requirements:</p>
            <p class="italic mb-4">I'm in need of a talented logo & stationary designer to create a modern and sleek logo & business card design for my new salon business named "Beauty Salon".</p>

            <p class="mb-2 font-bold underline">Key Requirements:</p>
            <ol class="list-decimal pl-6 mb-4">
                <li><strong>Modern and Sleek:</strong> The logo & business card should embody a modern, sleek design style.</li>
                <li><strong>Bright and Bold Colors:</strong> I prefer the logo to be designed in alpha female color scheme.</li>
                <li><strong>Icon with Text:</strong> The design should include an Icon along with the text "Beauty Salon".</li>
            </ol>

            <p class="mb-2 font-bold underline">2.A Create a vector Logo Design</p>
            <ol class="list-decimal pl-6 mb-4">
               <li>Apply Graphic Design Concept and Guidelines</li>
               <li>Create a logo design folder and keep all your files inside the Job 02 Folder.</li>
               <li>Create a new document in the web section with artboard dimensions width 2000px height 2000px.</li>
               <li>Create logo design artwork using Pen or Brush tools.</li>
               <li>Apply color as per clients requirements "Alpha Female Color Scheme"</li>
            </ol>
             
            <p class="mb-2 font-bold underline">2.B. Business Card Design</p>
            <ol class="list-decimal pl-6 mb-4">
               <li>Create a new document in the print section with artboard dimensions A4 size.</li>
               <li>Create business card design artwork using necessary tools.</li>
               <li>Business card size 3.5 in x 2 in.</li>
               <li>Bleed size 0.125in.</li>
               <li>Inner safety margin 0.125in.</li>
               <li>Apply colour as per client's requirements.</li>
               <li>Use font name "Roboto" download from internet.</li>
               <li><strong>Details:</strong> Name: Maria Milky | Designation: C.E.O | Phone: 2 lines | Email/Web | Address</li>
               <li>Use icons collect from internet.</li>
               <li>Export and Save as copy the Business card design in PNG, JPG, SVG, and print ready PDF, EPS format.</li>
            </ol>
        </div>
      </div>
    `
  },
  {
    id: 'job-03',
    title: "Job 03: Ads Banner Creation",
    description: "Prepare Image and Create an Ads Banner",
    timeLimitMinutes: 90,
    content: `
      <div class="font-serif text-black">
        <h2 class="text-center font-bold text-lg mb-4 uppercase">Job Sheet-3 for Graphic Design, Level-3</h2>

        <!-- Header Table -->
        <table class="w-full border-collapse border border-black mb-6 text-sm">
           <tbody>
             <tr>
               <td class="border border-black p-2 bg-gray-100 font-bold w-1/4">Candidate Name:</td>
               <td class="border border-black p-2 w-3/4"></td>
             </tr>
             <tr>
               <td class="border border-black p-2 bg-gray-100 font-bold">Job 03:</td>
               <td class="border border-black p-2">Prepare Image and Create an Ads Banner</td>
             </tr>
             <tr>
               <td class="border border-black p-2 bg-gray-100 font-bold">Time:</td>
               <td class="border border-black p-2">1:30 Hours</td>
             </tr>
             <tr>
               <td class="border border-black p-2 bg-gray-100 font-bold align-top">Unit Covered:</td>
               <td class="border border-black p-2 text-xs">
                 OU-ICT-GD-03-L3-V1: Separate and Compose Image<br/>
                 OU-ICT-GD-04-L3-V1: Create Mock-Up and Print
               </td>
             </tr>
           </tbody>
        </table>

        <!-- Instructions -->
        <div class="border border-black p-0 mb-6 text-sm">
           <div class="bg-gray-100 font-bold p-2 border-b border-black">Instructions:</div>
           <div class="p-4">
             <p class="mb-2 font-bold">Read and understand the directions carefully:</p>
             <ul class="list-disc pl-6 space-y-1">
               <li>this practical demonstration is based on the performance criteria from all or some of the units of competency in Graphic Design, Level-3</li>
               <li>this assessment activity will be used to measure your underpinning skills</li>
               <li>you will have fifteen (15) minutes to familiarise yourself with the resources to be used</li>
             </ul>
           </div>
        </div>

        <div class="break-before-page"></div>
        <h2 class="text-center font-bold text-lg mb-4 mt-8">Specification Sheet - 3 for Graphic Design, Level-3</h2>
        <div class="border border-black p-4 mb-6 text-sm">
           <h3 class="font-bold underline mb-2">3.A Prepare Image</h3>
           <ol class="list-decimal pl-6 mb-4">
             <li>Apply Graphic Design Concepts and Guidelines</li>
             <li>Separate and Compose image</li>
             <li>Keep all your images and files organized.</li>
             <li>Collect necessary Images from the assessor</li>
             <li>Remove the spot using spot-removing tools.</li>
             <li>Remove background using the pen tool and refine edge.</li>
             <li>Use a light Color Background</li>
             <li>Save those background-removed images as PNG and PSD in separate files.</li>
           </ol>

           <h3 class="font-bold underline mb-2">3.B. Create an ADs Banner:</h3>
           <ol class="list-decimal pl-6 mb-4">
             <li>Open a new document in raster based graphic design software</li>
             <li>Named the document AD Banner.</li>
             <li>Width 1000px, height =400px, Resolution 72</li>
             <li>Color mode RGB</li>
             <li>Use a meaningful background for represent the banner.</li>
             <li>Use a Title TEXT Like sample Image</li>
             <li>Use suitable products for Ad.t</li>
             <li>Adjust image Color as per required image using adjustment and adjustment layers</li>
             <li>Use any tools and effects if necessary.</li>
             <li>Save the image in Job 3 folder as PNG and JPEG remember that color profile should be sRGB.</li>
           </ol>
        </div>
      </div>
    `
  }
];
