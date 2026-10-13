# Google Scholar requires citation_pdf_url to be beside the HTML abstract.
# Publish an alias from the existing PDF so both URLs share one source file.
module Jekyll
  class PublicationPdf < StaticFile
    def initialize(site, source, output_url)
      super(site, site.source, File.dirname(source), File.basename(source))
      @output_url = output_url
    end

    def destination(dest)
      File.join(dest, @output_url)
    end
  end

  class PublicationPdfs < Generator
    safe true

    def generate(site)
      site.collections.fetch('projects').docs.each do |page|
        publication = page.data['publication']
        next unless publication && publication['pdf']

        pdf = PublicationPdf.new(site, publication['pdf'], "#{page.url}paper.pdf")
        raise "Missing publication PDF: #{pdf.path}" unless File.file?(pdf.path)

        publication['pdf_url'] = "#{page.url}paper.pdf"
        site.static_files << pdf
      end
    end
  end
end
