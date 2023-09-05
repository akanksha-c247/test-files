import React from 'react'
import Accordion from '../../components/accordian'
import './answerQuestion.scss'

export const AccordianPage = () => {
  return (
    <div className='accordian'>
        <h1>Answers to Popular Questions</h1>
        <div className="sectionPage">
      <Accordion title="Do you sell vehicle route optimization software or mobile workforce management solutions?">
        <p>This is content for section 1.</p>
      </Accordion>
      <Accordion title="Do you sell vehicle route optimization software or mobile workforce management solutions?">
        <p>This is content for section 2.</p>
      </Accordion>
      <Accordion title="Do you sell vehicle route optimization software or mobile workforce management solutions?">
        <p>Yes, we have assisted small companies and large cities in all facets of the software purchase process: business process optimization, evaluation of vendors, RFP procurement management, data set-up, baseline performance assessment, schedule changes, route development, systems integration, performance monitoring and training.</p>
      </Accordion>
      <Accordion title="Do you sell vehicle route optimization software or mobile workforce management solutions?">
        <p>Yes, we have assisted small companies and large cities in all facets of the software purchase process: business process optimization, evaluation of vendors, RFP procurement management, data set-up, baseline performance assessment, schedule changes, route development, systems integration, performance monitoring and training.</p>
      </Accordion>
      <Accordion title="Do you sell vehicle route optimization software or mobile workforce management solutions?">
        <p>Yes, we have assisted small companies and large cities in all facets of the software purchase process: business process optimization, evaluation of vendors, RFP procurement management, data set-up, baseline performance assessment, schedule changes, route development, systems integration, performance monitoring and training.</p>
      </Accordion>
    </div>
    </div>
  )
}
