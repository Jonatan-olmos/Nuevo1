let estudiantes = [
    {
        nombre : 'Marina',
        promedio : 9,
        curso : 'Full Stack',
      },
    
      {
        nombre: 'francisco',
        promedio : 2,
        curso : 'Android',
      },
    
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    }
   
    
  ]
  let  alumnoDeBaja = estudiantes.shift()
  let  alumnoDeBaja2 = estudiantes.shift()
  
  estudiantes.unshift ( {
        nombre : 'Marina',
        promedio : 9,
        curso : 'Full Stack',
      },
    
      {
        nombre: 'francisco',
        promedio : 2,
        curso : 'Android',
      },
    )
    console.log(estudiantes);