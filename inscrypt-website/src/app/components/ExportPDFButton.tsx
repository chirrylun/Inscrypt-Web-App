import React from 'react';
import { Document, Page, Text, View, StyleSheet, pdf, Font } from '@react-pdf/renderer';
import { projectData, ProjectGroup, ProjectItem } from '../data/projectData';

// Register custom fonts
Font.register({
    family: 'Roboto',
    fonts: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf', fontWeight: 300 },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf', fontWeight: 400 },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf', fontWeight: 500 },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf', fontWeight: 700 },
    ],
  });
  

const formatCurrency = (amount: number): string => {
  return amount.toString();
};

const styles = StyleSheet.create({
  page: { 
    padding: 40, 
    backgroundColor: '#F8FAFC',
    fontFamily: 'Roboto',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#E2E8F0',
  },
  title: { 
    fontSize: 28, 
    fontWeight: 700,
    color: '#1E293B',
  },
  date: {
    fontSize: 12,
    color: '#64748B',
  },
  groupTitle: { 
    fontSize: 20, 
    fontWeight: 500,
    marginTop: 20, 
    marginBottom: 15,
    color: '#334155',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    boxShadow: '0 4px 6px rgb(0, 0, 0, 0.1)',
  },
  itemName: { 
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 5,
    color: '#334155',
  },
  itemCost: { 
    fontSize: 16,
    fontWeight: 700,
    color: '#0EA5E9',
  },
  groupTotal: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 15, 
    paddingTop: 10, 
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
  groupTotalText: {
    fontSize: 16,
    fontWeight: 500,
    color: '#334155',
  },
  grandTotal: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 30, 
    paddingTop: 15, 
    borderTopWidth: 2,
    borderTopColor: '#0EA5E9',
  },
  grandTotalText: {
    fontSize: 20,
    fontWeight: 700,
    color: '#0EA5E9',
  },
});

const ProjectBreakdownPDF: React.FC<{
  selectedItems: Set<string>;
  groupTotals: Record<string, number>;
  grandTotal: number;
}> = ({ selectedItems, groupTotals, grandTotal }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>Project Breakdown</Text>
        <Text style={styles.date}>{new Date().toLocaleDateString()}</Text>
      </View>
      {projectData.map((group: ProjectGroup) => {
        const selectedGroupItems = group.items.filter((item: ProjectItem) => selectedItems.has(item.id));
        if (selectedGroupItems.length === 0) return null;
        
        return (
          <View key={group.id}>
            <Text style={styles.groupTitle}>{group.name}</Text>
            <View style={styles.cardContainer}>
              {selectedGroupItems.map((item: ProjectItem) => (
                <View key={item.id} style={styles.card}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemCost}>N{formatCurrency(item.cost)}</Text>
                </View>
              ))}
            </View>
            <View style={styles.groupTotal}>
              <Text style={styles.groupTotalText}>Section Total:</Text>
              <Text style={styles.groupTotalText}>N{formatCurrency(groupTotals[group.id])}</Text>
            </View>
          </View>
        );
      })}
      <View style={styles.grandTotal}>
        <Text style={styles.grandTotalText}>Grand Total:</Text>
        <Text style={styles.grandTotalText}>N{formatCurrency(grandTotal)}</Text>
      </View>
    </Page>
  </Document>
);
interface ExportPDFButtonProps {
    selectedItems: Set<string>;
    groupTotals: Record<string, number>;
    grandTotal: number;
  }
  
  const ExportPDFButton: React.FC<ExportPDFButtonProps> = ({ selectedItems, groupTotals, grandTotal }) => {
    const [isGenerating, setIsGenerating] = React.useState(false);
  
    const generatePDF = async () => {
      setIsGenerating(true);
      try {
        const blob = await pdf(
          <ProjectBreakdownPDF
            selectedItems={selectedItems}
            groupTotals={groupTotals}
            grandTotal={grandTotal}
          />
        ).toBlob();
        
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'project_breakdown.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Error generating PDF:', error);
        
      } finally {
        setIsGenerating(false);
        console.log("generated successfully")
      }
    };
  
    return (
      <button
        onClick={generatePDF}
        disabled={isGenerating}
        className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors ${
          isGenerating ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {isGenerating ? 'Generating PDF...' : 'Export Breakdown'}
      </button>
    );
  };

export default ExportPDFButton;